var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

const endTime = new Date(2017,6,12,18,47,52);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];



window.onload = function(){
    var canvas = document.getElementById('canvas');

    WINDOW_WIDTH = document.body.clientWidth;
    WINDOW_HEIGHT = document.body.clientHeight;
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10 );
    MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5 );
    RADIUS = Math.round(WINDOW_WIDTH * 4 / 5 / 108) - 1;

    
    
    var context = canvas.getContext('2d');

    curShowTimeSeconds = getCurrentShowTimeSeconds();

    //render(context);
    setInterval(
        function(){
            render(context);
            update();
        },50);
} 

function update(){
    var nextShowTimeSeconds = getCurrentShowTimeSeconds();
    var nextHours = parseInt(nextShowTimeSeconds / 3600);
    var nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60);
    var nextSeconds = nextShowTimeSeconds % 60;

    var curtHours = parseInt(curShowTimeSeconds / 3600);
    var curMinutes = parseInt((curShowTimeSeconds - curtHours * 3600) / 60);
    var curSeconds = curShowTimeSeconds % 60;

    if( nextSeconds != curSeconds){
        if(parseInt(curtHours / 10 )!= parseInt(nextHours / 10)){
            addBalls(MARGIN_LEFT + 0, MARGIN_TOP, parseInt(curtHours / 10));
        }
        if(parseInt(curtHours % 10 )!= parseInt(nextHours % 10)){
            addBalls(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(curtHours / 10));
        }

        if(parseInt(curMinutes / 10 )!= parseInt(nextMinutes / 10)){
            addBalls(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes / 10));
        }
        if(parseInt(curMinutes % 10 )!= parseInt(nextMinutes % 10)){
            addBalls(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(curMinutes / 10));
        }

        if(parseInt(curSeconds / 10 )!= parseInt(nextSeconds / 10)){
            addBalls(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds / 10));
        }
        if(parseInt(curSeconds % 10 ) != parseInt(nextSeconds % 10)){
            addBalls(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(curSeconds / 10));
        }           
        curShowTimeSeconds = nextShowTimeSeconds;
    }
    updateBalls();
}

function updateBalls(){
    for(var i = 0 ;i < balls.length ; i++ ){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;

        if( balls[i].y >= WINDOW_HEIGHT - RADIUS){
            balls[i].y = WINDOW_HEIGHT -RADIUS;
            balls[i].vy = - balls[i].vy * 0.75 ;
        }
    }

    var cnt = 0 ;
    for(var i = 0 ; i < balls.length ; i++){
        if(balls[i].x +RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH )
            balls[cnt++] =balls[i];
    }
    while(balls.length > Math.min(300, cnt)){
        balls.pop();    
    }
}

function addBalls(x, y, num){
    for(var i =0 ; i <digit[num].length ; i++)
        for(var j =0 ; j <digit[num][i].length ; j++ )
        if(digit[num][i][j] == 1){
            var aBall ={
                x: x + j * 2 * (RADIUS+1) + (RADIUS+1),
                y: y + i * 2 * (RADIUS+1) + (RADIUS+1),
                g: 1.5 +Math.random(),
                vx: Math.pow(-1, Math.ceil(Math.random()*1000)) * 4,
                vy: 5,
                color: colors[Math.floor(Math.random() * colors.length )]
            }
            balls.push(aBall);
        }
}

function getCurrentShowTimeSeconds(){
    var curTime = new Date();
    var ret = endTime.getTime() - curTime.getTime();
    ret = Math.round( ret/1000);

    return ret >=0 ? ret:0;
}

function render(cxt){
    //var nowDate = new Date();
    //console.log(nowDate+'/'+nowDate.getMinutes());
    cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);

    var hours = parseInt(curShowTimeSeconds / 3600);//nowDate.getHours();
    var minutes = parseInt((curShowTimeSeconds - hours * 3600)/60);//nowDate.getMinutes();
    var seconds = curShowTimeSeconds % 60 ;//nowDate.getSeconds();


    renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt);
    renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, parseInt(hours%10), cxt);
    renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, cxt);

    renderDigit(MARGIN_LEFT+ 39 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes/10), cxt);
    renderDigit(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, parseInt(minutes%10), cxt);
    renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, cxt);

    renderDigit(MARGIN_LEFT + 78 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds/10), cxt);
    renderDigit(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, parseInt(seconds%10), cxt);
    
    for(var i = 0 ; i < balls.length ; i ++){
        cxt.fillStyle = balls[i].color;

        cxt.beginPath();
        cxt.arc(balls[i].x, balls[i].y, RADIUS, 0, 2 * Math.PI, true );
        cxt.closePath();
        cxt.fill();
    }
}

function renderDigit(x, y, num, cxt){
    cxt.fillStyle = 'rgb(0,102,153';

    for(var i = 0 ; i < digit[num].length ; i++)
        for(var j = 0 ; j < digit[num][i].length ; j++)
            if(digit[num][i][j]==1){
                cxt.beginPath();
                cxt.arc(x+j*2*(RADIUS + 1) + (RADIUS + 1), y+i*2*(RADIUS + 1) + (RADIUS + 1), RADIUS, 0, 2*Math.PI);
                cxt.closePath();

                cxt.fill();
            }
}