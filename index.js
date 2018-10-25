!function(){
    let duration= 20
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n=0
        let ids=setTimeout(function run(){
            n+=1
            container.innerHTML= code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop=container.scrollHeight
            if(n>=code.length){
                window.clearInterval(ids)
                fn && fn.call()
            }else{
                setTimeout(run,duration)
            }
        },duration)
    }
    let code=`
    /*
     首先是皮卡丘的黄皮
    */
    .preview{
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#fee433;
    }
    .wrapper{
        width:100%;
        height:165px;
        position: relative;
    }
    /*
     然后是皮卡丘的小鼻子
    */
    .nose{
        height: 0px;
        width:0px;
        border:11px solid ;
        border-width:10px 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        top: 28px;
        left: 50%;
        transform:translateX(-50%);
    }
    /*
    接着是皮卡丘的水汪汪的大眼睛
   */
    .eye{
        width:49px;
        height:49px;
        background:#2e2e2e;
        position: absolute;
        border:2px solid #000;
        border-radius:50%;
    }
    .eye::before{
        content:'';
        display:block;
        height:24px;
        width:24px;
        background:white;
        position: absolute;
        border-radius:50%;
        left:6px;
        top:-1px;
        border:2px solid #000;
    }
    .eye.left{
        right:50%;
        margin-right:90px;
    }
    .eye.right{
        left:50%;
        margin-left:90px;
    }
    /*
    两坨萌萌哒的腮红
   */
    .face{
        position: absolute;
        width:68px;
        height:68px;
        border:2px solid black;
        border-radius:50%;
        background:#fc0d1c;
    }
    .face.left{
        right:50%;
        top:85px;
        margin-right:116px;
    }
    .face.right{
        left:50%;
        top:85px;
        margin-left:116px;
    }
    /*
    超级贪吃的大嘴巴，
   */
    .upperlip{
        width:24px;
        height:74px;
        border:3px solid black;
        border-top:none;
        border-right:none;
        position:absolute;
        top:22px;
        background-color:#fee433;
        z-index:2;
    }
    .upperlip.right{
        left:50%;
        border-bottom-left-radius:20px 45px;
        transform:rotate(-69deg);
        margin-left:26px
    }
    .upperlip.left{
        border:3px solid black;
        right:50%;
        border-bottom-right-radius:19px 45px;
        border-top:none;
        border-left:none;
        transform:rotate(68deg);
        margin-right:26px;
        top:22px;
    }
    /*
    装的下整个世界的舌头
   */
    .lowerlipWrapper{
        position: absolute;
        left:50%;
        margin-left:-150px;
        height:120px;
        bottom:0;
        overflow: hidden;
        width:300px;
        /* border:1px solid red; */
        top:54px;
    
    }
    .lowerlip{
        position: absolute;
        width:300px;
        height:3500px;
        background:#990513;
        border-radius:200px/2000px;
        border: 2px solid black;
        bottom:0;
        overflow: hidden;
        
    }
    .lowerlip::after{
        content:'';
        position:absolute;
        width:100px;
        height:100px;
        background:#fc4a62;
        margin-left:98px;
        bottom:-2px;
        border-radius:50px;
    }
    /*
    再见,非常感谢您看到这里
   */
    `
    writeCode('',code)
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed= $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration=100
                break
            case 'nomarl':
                duration = 50
                break
            case 'fast':
            duration = 10
            break
        }
    })
}.call()