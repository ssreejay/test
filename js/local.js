function trace(aa){    try{    console.log(aa)    }catch(e){}}

if (Prototype.BrowserFeatures.ElementExtensions) {
    var disablePrototypeJS = function (method, pluginsToDisable) {
            var handler = function (event) {
                event.target[method] = undefined;
                setTimeout(function () {
                    delete event.target[method];
                }, 0);
            };
            pluginsToDisable.each(function (plugin) {
                jQuery(window).on(method + '.bs.' + plugin, handler);
            });
        },

        pluginsToDisable = ['collapse', 'dropdown', 'modal', 'tooltip', 'popover', 'tab'];
    disablePrototypeJS('show', pluginsToDisable);
    disablePrototypeJS('hide', pluginsToDisable);
}

var resizer;
function resizeiFrame(_val){
    
    if(_val =='now'){
        
        clearInterval(resizer);
        setTimeout(function(){
            try{                                            
                newHeight =$$('.pageContainer').outerHeight()+'px'
                parent.adjustIframeHeight(newHeight)
            }catch(e){}
        },10)
    }
    
       
    if(_val =='start'){
        count = 0
        clearInterval(resizer);
        resizer = setInterval(function () {
          try{                            
            newHeight =$$('.pageContainer').outerHeight()+'px'
            parent.adjustIframeHeight(newHeight)
            }catch(e){}                        
          if(count>60){
            clearInterval(resizer);
          }
      }, 20); 
    }        
    
     if(_val =='stop'){        
        clearInterval(resizer);
        resizer = null
    }
}


jQuery(document).ready(function () {
    
    
    //accordion events
    jQuery(".panel-collapse").on("shown.bs.collapse", function () {        
        resizeiFrame('stop')
    })
    .on("show.bs.collapse", function () {    
        resizeiFrame('start')
    })
    .on("hidden.bs.collapse", function () {
        resizeiFrame('stop')
    })   
    .on("hide.bs.collapse", function () {                
        resizeiFrame('start')    
    });
    

    
    jQuery(".audio").mb_miniPlayer({
        width: 300,
        inLine: false,
        id3: true,
        addShadow: false,
        pauseOnWindowBlur: false,
        downloadPage: null
    });
    updateLinks();

    jQuery("#printBtnLink").on("click", printThisPage);
    jQuery(".chkbox").on("click", setCheckboxData);
    if(userID){
     readCheckboxData(userID, weekNum);
    }
    
    try{
        setupLocalPage()
    }catch(e){}
    
    $$('.nav-tabs a').bind({click:function(){  resizeiFrame('now')}})    
    $$('.aCheckList input').addClass('chkbox')
    $$('.readmore').readmore({
        speed: 200,
        collapsedHeight: 55,
        moreLink: '<a href="#" class="readmore_btn"><i class="fa fa-arrow-circle-down"></i> Read more</a>',
        lessLink: '<a href="#" class="readmore_btn"><i class="fa fa-arrow-circle-up"></i> Close</a>',
        beforeToggle:function(trigger, element, expanded){
            if(expanded){
           //     trace('before shrinking')
                
                  resizeiFrame('start')
                $$(element).removeClass('autoHeight')
                $$(element).height($$(element).height()+'px')
                .data({expandedHeight:$$(element).height()})                                           
            }                   
            else{
              //  trace('before expanding')
                resizeiFrame('start')
                resetIframe('1',true)
            }

        },
        afterToggle: function(trigger, element, expanded) {                    
            if(!expanded) {
                //  trace('after shrink')
                  resizeiFrame('stop')
                $$('.rightBlock',element).hide()
                $$(trigger).focus()

            }else{
                //  trace('after expanding')
                  resizeiFrame('stop')
                $$(element).addClass('autoHeight')
                $$('.rightBlock',element).fadeIn()

            }   
            resetIframe('1')
          }                
    });
    
    $$('.anAccordion').each(function(accIdx, accordian){
                    
                    accordian.id = 'acc'+ Number(accIdx+1)
                    
            $$('.panel',accordian).each(function (index, panel) {
                
                panel.id = 'panel'+ Number(index+1)+'_'+accordian.id 

                head = $$(panel).find('.panel-heading')
                headAnchor = $$(panel).find('.heading-anchor')
                accContent = $$(panel).find('.panel-collapse')
                newId = 'collapse' + Number(index + 1)+'_'+accordian.id

                accContent.prop({
                    id: newId
                })
                head.attr({
                    href: '#' + newId,
                    //'data-parent':'#'+accordian.id,   //UNCOMMENT TO AUTOHIDE
                    'aria-controls':newId                                        
                })
                headAnchor.attr({
                    href: '#' + newId,
                    //'data-parent':'#'+accordian.id,   //UNCOMMENT TO AUTOHIDE
                    'aria-controls': newId
                })
            })            
            })


    $$('.tabs-container').each(function (index, panel) {

        prefix = 'tCont' + index
        allTabAncor = $$('.nav-tabs a', panel)
        allTab = $$('.tab-pane', panel)
        allTabAncor.each(function (index2, anchor) {
            var newId = prefix + '_tab' + Number(index2 + 1)
            allTab.eq(index2).attr({
                id: newId,
                role:'tabpanel'
            })
            $$(anchor).attr({
                'href': '#' + newId, 
                'aria-controls': newId,
                'data-toggle':'tab',
                role:'tab'
            })
        })
    })

}); //end document ready
function resetIframe(delay,before){
    
    return;

    if(!delay){delay=150}
        setTimeout(function(){
            try{
                beforeExpand = 0
                if(before){beforeExpand=600}
                newHeight =Number($$( document.body).outerHeight()+beforeExpand)+'px'
                parent.adjustIframeHeight(newHeight)
            }catch(e){} 
        },delay)
}

function hideBlocker() {
    TweenMax.to("#blocker", 0.3, {
        autoAlpha: 0,
        delay: 0.25,
        ease: Linear.easeNone
    });
    TweenMax.to("#pagePopup", 0.25, {
        rotationX: 70,
        y: -300,
        z: -500,
        autoAlpha: 0,
        display: "none",
        ease: Power1.easeIn,
        onComplete: function () {
            TweenMax.set("#pagePopup", {
                clearProps: "zIndex"
            });
            jQuery("#pageContainer").html("");
        }
    });
}


function loadPageContainer(wkID) {
    jQuery("#spinner").show();
    jQuery("#pageContainer").load("week_" + wkID + ".html", function (response, status, xhr) {
        jQuery("#spinner").hide();
        if (status == "success") {
            jQuery("#pageContainer").animate({
                scrollTop: 0
            }, "fast");
            showBlocker();
        }
    });
}

function showBlocker() {
    TweenMax.set("#pagePopup", {
        zIndex: 5000
    });
    TweenMax.to("#blocker", 0.25, {
        autoAlpha: 0.6,
        ease: Linear.easeNone
    });
    TweenMax.set("#pagePopup", {
        scale: 0.5,
        rotationX: 70,
        autoAlpha: 0,
        y: -300,
        z: -500,
        xPercent: -50,
        yPercent: -50,
        x: 0,
        transformPerspective: 600,
        display: "block"
    });
    TweenMax.to("#pagePopup", 0.25, {
        autoAlpha: 1,
        scale: 1,
        ease: Back.easeOut.config(1.5),
        delay: 0.3
    });
    TweenMax.to("#pagePopup", 0.4, {
        rotationX: 0,
        y: 0,
        z: 0,
        ease: Back.easeOut.config(1),
        delay: 0.35,
        onComplete: function () {
            pageLoaded();
        }
    });

}


function printThisPage() {

    jQuery(".nav-tabs").hide();
    jQuery(".vid").hide();
    jQuery(".collapse").removeAttr("style").addClass("in");
    jQuery(".tab-content>.tab-pane").addClass("active");
    jQuery("#outerContainer").printThis();

    //reset tabs and accordions
    setTimeout(function () {
        jQuery(".nav-tabs").show();
        jQuery(".vid").show();
        jQuery(".collapse").removeClass("in");
        jQuery(".tab-content>.tab-pane").removeClass("active");
        jQuery(".tab-content>.tab-pane:first-child").addClass("active");
    }, 1000);

    //reset iframe height when page is finished printing
    try {
        resizeiFrame('now')
    } catch (ex) {}
}

function updateLinks() {

    try {
        //add 'opens in new window' to links
        var anchors = document.getElementById("outerContainer").getElementsByTagName("a");
        for (var i = 0; i < anchors.length; i++) {
            var tempTxt = stripHTML(anchors[i].innerHTML);
            if (anchors[i].target == "_blank") {
                //console.log(i+" a target: "+anchors[i].target);
                //console.log("a text: "+anchors[i].innerHTML);
                //console.log("a text only: "+tempTxt);
                //console.log("a title: "+anchors[i].title);
                //console.log("------------");
                anchors[i].setAttribute("title", tempTxt + " [opens in new window]");
            } else {
                anchors[i].setAttribute("title", tempTxt);
            }
        }
    } catch (ex) {}
}

function stripHTML(html) {
    return jQuery("<div />").html(html).text();
}


//load the iframes
function loadIframes(obj) {
    obj.attr('src', function () {
        return jQuery(this).data('src');
    });
}





//save the checkbox data to firebase
function saveCheckboxData(uid, wkNum, obj) {
    myFirebaseRef.child("Week" + wkNum).set(obj);
}

function readCheckboxData(uid, wkNum) {
    var obj = {};
    myFirebaseRef.child("Week" + wkNum).on("value", function (snapshot) {
        obj = snapshot.val();
        setCheckboxes(obj);
    });
}

function setCheckboxes(obj) {
    if (obj != null) {
        jQuery.each(obj, function (j, k) {
            if (k == 1) {
                jQuery("#" + j).prop("checked", true);
                jQuery("#" + j).next().addClass("completedChkbox");
            }
        });
    }
}

function setCheckboxData() {
    var newObj = new Object();
    jQuery(".chkbox").each(function (i) {
        var checked = 0;
        if (jQuery(this).is(':checked')) {
            checked = 1;
            jQuery(this).next().addClass("completedChkbox");
        } else {
            jQuery(this).next().removeClass("completedChkbox");
        }
        newObj["chk" + (i + 1)] = checked;
    });
    
    trace(newObj)
    saveCheckboxData(userID, weekNum, newObj);
}



//COURSE SPECIFIC
