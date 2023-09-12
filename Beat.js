// Initialize beats

var beat1 =document.createElement("Audio")
var beat2 =document.createElement("Audio")
var beat3 =document.createElement("Audio")
var beat4 =document.createElement("Audio")
var beat5 =document.createElement("Audio")
var beat6 =document.createElement("Audio")
var beat7 =document.createElement("Audio")
var beat8 =document.createElement("Audio")
var beat9 =document.createElement("Audio")
var beat10 =document.createElement("Audio")
var beat11 =document.createElement("Audio")
var beat12 =document.createElement("Audio")

beat1.src="Beat1.mp3"
beat2.src="Beat2.mp3"
beat3.src="Beat3.mp3"
beat4.src="Beat4.mp3"
beat5.src="Beat5.mp3"
beat6.src="Beat6.mp3"
beat7.src="Beat7.mp3"
beat8.src="Beat8.mp3"
beat9.src="Beat9.mp3"
beat10.src="Beat10.mp3"
beat11.src="Beat11.mp3"
beat12.src="Beat12.mp3"

// Play beat
  
function playBeat1(e) {
  if ($("#Q").is(":checked")) {
    beat1.play()
$('#beat1Con').show()
  }else{
    beat1.currentTime =0;
    beat1.pause()
    $('#beat1Con').hide()
 }
  }
  
  function playBeat2() {
  
  if ($("#W").is(":checked")) {
  playBeat1()
  beat2.play()
  $('#beat2Con').show()
  }else{
  beat2.currentTime =0;
  beat2.pause()
  $('#beat2Con').hide()
  }
  }
  
  function playBeat3() {
  
  if ($("#E").is(":checked")) {
  playBeat1()
  playBeat2()
  beat3.play()
  $('#beat3Con').show()
  }else{
  beat3.currentTime =0;
  beat3.pause()
  $('#beat3Con').hide()
  }
  }
  
  function playBeat4() {
  
  if ($("#R").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  beat4.play()
  $('#beat4Con').show()
  }else{
  beat4.currentTime =0;
  beat4.pause()
  $('#beat4Con').hide()
  }
  }
  
  function playBeat5() {
  
  if ($("#T").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  beat5.play()
  $('#beat5Con').show()
  }else{
  beat5.currentTime =0;
  beat5.pause()
  $('#beat5Con').hide()
  }
  }
  
  function playBeat6() {
  
  if ($("#Y").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  beat6.play()
  $('#beat6Con').show()
  }else{
  beat6.currentTime =0;
  beat6.pause()
  $('#beat6Con').hide()
  }
  }
  
  function playBeat7() {
  
  if ($("#U").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  beat7.play()
  $('#beat7Con').show()
  
  }else{
  beat7.currentTime =0;
  beat7.pause()
  $('#beat7Con').hide()
  }
  }
  
  function playBeat8() {
  
  if ($("#I").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  playBeat7()
  beat8.play()
  $('#beat8Con').show()
  }else{
  beat8.currentTime =0;
  beat8.pause()
  $('#beat8Con').hide()
  }
  }
  
  function playBeat9() {
  
  if ($("#O").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  playBeat7()
  playBeat8()
  beat9.play()
  $('#beat9Con').show()
  }else{
  beat9.currentTime =0;
  beat9.pause()
  $('#beat9Con').hide()
  }
  }
  
  function playBeat10() {
  
  if ($("#P").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  playBeat7()
  playBeat8()
  playBeat9()
  beat10.play()
  $('#beat10Con').show()
  }else{
  beat10.currentTime =0;
  beat10.pause()
  $('#beat10Con').hide()
  }
  }
  
  function playBeat11() {
  
  if ($("#A").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  playBeat7()
  playBeat8()
  playBeat9()
  beat11.play()
  $('#beat11Con').show()
  }else{
  beat11.currentTime =0;
  beat11.pause()
  $('#beat11Con').hide()
  }
  }
  
  function playBeat12() {
  
  if ($("#S").is(":checked")) {
  playBeat1()
  playBeat2()
  playBeat3()
  playBeat4()
  playBeat5()
  playBeat6()
  playBeat7()
  playBeat8()
  playBeat9()
  beat12.play()
  $('#beat12Con').show()
  }else{
  beat12.currentTime =0;
  beat12.pause()
  $('#beat12Con').hide()
  }
  }
  
  // End beat
  
  $(beat1).on("ended", ()=>{
   $("#Q").prop("checked",false)
  })
  
  $(beat2).on("ended", ()=>{
   $("#W").prop("checked",false)
  })
  
  $(beat3).on("ended", ()=>{
   $("#E").prop("checked",false)
  })
  
  $(beat4).on("ended", ()=>{
   $("#R").prop("checked",false)
  })
  
 $(beat5).on("ended", ()=>{
   $("#T").prop("checked",false)
  })
  
  $(beat6).on("ended", ()=>{
   $("#Y").prop("checked",false)
  })
 
 $(beat7).on("ended", ()=>{
   $("#U").prop("checked",false)
  })
  
  $(beat8).on("ended", ()=>{
   $("#I").prop("checked",false)
  })
  
  $(beat9).on("ended", ()=>{
   $("#O").prop("checked",false)
  })
  
  $(beat10).on("ended", ()=>{
   $("#P").prop("checked",false)
  })
  
  $(beat11).on("ended", ()=>{
   $("#A").prop("checked",false)
  })
  
  $(beat12).on("ended", ()=>{
   $("#S").prop("checked",false)
  })
 
  //set General Volume

function setVolume(){

var getVolume1 = $('#B1volume').val()
var getVolume2 = $('#B2volume').val()
var getVolume3 = $('#B3volume').val()
var getVolume4 = $('#B4volume').val()
var getVolume5 = $('#B5volume').val()
var getVolume6 = $('#B6volume').val()
var getVolume7 = $('#B7volume').val()
var getVolume8 = $('#B8volume').val()
var getVolume9 = $('#B9volume').val()
var getVolume10 = $('#B10volume').val()
var getVolume11 = $('#B11volume').val()
var getVolume12 = $('#B12volume').val()

beat1.volume=getVolume1
beat2.volume=getVolume2
beat3.volume=getVolume3
beat4.volume=getVolume4
beat5.volume=getVolume5
beat6.volume=getVolume6
beat7.volume=getVolume7
beat8.volume=getVolume8
beat9.volume=getVolume9
beat10.volume=getVolume10
beat11.volume=getVolume11
beat12.volume=getVolume12

var percentage1 = $('#B1volume').val() * 1000
var percentage2 = $('#B2volume').val() * 1000
var percentage3 = $('#B3volume').val() * 1000
var percentage4 = $('#B4volume').val() * 1000
var percentage5 = $('#B5volume').val() * 1000
var percentage6 = $('#B6volume').val() * 1000
var percentage7 = $('#B7volume').val() * 1000
var percentage8 = $('#B8volume').val() * 1000
var percentage9 = $('#B9volume').val() * 1000
var percentage10 = $('#B10volume').val() * 1000
var percentage11 = $('#B11volume').val() * 1000
var percentage12 = $('#B12volume').val() * 1000


// output vol to html

$('#vol1').text(percentage1 + "%")
$('#vol2').text(percentage2 + "%")
$('#vol3').text(percentage3 + "%")
$('#vol4').text(percentage4 + "%")
$('#vol5').text(percentage5 + "%")
$('#vol6').text(percentage6 + "%")
$('#vol7').text(percentage7 + "%")
$('#vol8').text(percentage8 + "%")
$('#vol9').text(percentage9 + "%")
$('#vol10').text(percentage10 + "%")
$('#vol11').text(percentage11 + "%")
$('#vol12').text(percentage12 + "%")
}

function setPlayback(){
var getSpeed1 = $('#B1speed').val()
var getSpeed2 = $('#B2speed').val()
var getSpeed3 = $('#B3speed').val()
var getSpeed4 = $('#B4speed').val()
var getSpeed5 = $('#B5speed').val()
var getSpeed6 = $('#B6speed').val()
var getSpeed7 = $('#B7speed').val()
var getSpeed8 = $('#B8speed').val()
var getSpeed9 = $('#B9speed').val()
var getSpeed10 = $('#B10speed').val()
var getSpeed11 = $('#B11speed').val()
var getSpeed12 = $('#B12speed').val()

beat1.playbackRate = getSpeed1
beat2.playbackRate = getSpeed2
beat3.playbackRate = getSpeed3
beat4.playbackRate = getSpeed4
beat5.playbackRate = getSpeed5
beat6.playbackRate = getSpeed6
beat7.playbackRate = getSpeed7
beat8.playbackRate = getSpeed8
beat9.playbackRate = getSpeed9
beat10.playbackRate = getSpeed10
beat11.playbackRate = getSpeed11
beat12.playbackRate = getSpeed12

$('#speed1').text(getSpeed1 + "x")
$('#speed2').text(getSpeed2 + "x")
$('#speed3').text(getSpeed3 + "x")
$('#speed4').text(getSpeed4 + "x")
$('#speed5').text(getSpeed5 + "x")
$('#speed6').text(getSpeed6 + "x")
$('#speed7').text(getSpeed7 + "x")
$('#speed8').text(getSpeed8 + "x")
$('#speed9').text(getSpeed9 + "x")
$('#speed10').text(getSpeed10 + "x")
$('#speed11').text(getSpeed11 + "x")
$('#speed12').text(getSpeed12 + "x")

}

// Switch off Beat Pad

function setSwitch(){
if($('#switch').is(':checked')){
$('#LSwitch').html('ON')
$('#Q').prop('disabled',false)
$('#W').prop('disabled',false)
$('#E').prop('disabled',false)
$('#R').prop('disabled',false)
$('#T').prop('disabled',false)
$('#Y').prop('disabled',false)
$('#U').prop('disabled',false)
$('#I').prop('disabled',false)
$('#O').prop('disabled',false)
$('#P').prop('disabled',false)
$('#A').prop('disabled',false)
$('#S').prop('disabled',false)
$('#Bvolume').prop('disabled',false)
$('#Bspeed').prop('disabled',false)


}else{
$('#LSwitch').html('OFF')
$('#Q').prop('disabled',true)
$('#W').prop('disabled',true)
$('#E').prop('disabled',true)
$('#R').prop('disabled',true)
$('#T').prop('disabled',true)
$('#Y').prop('disabled',true)
$('#U').prop('disabled',true)
$('#I').prop('disabled',true)
$('#O').prop('disabled',true)
$('#P').prop('disabled',true)
$('#A').prop('disabled',true)
$('#S').prop('disabled',true)
$('#Bvolume').prop('disabled',true)
$('#Bspeed').prop('disabled',true)

// Audio control  toggle

$('#beat1Con').hide()
$('#beat2Con').hide()
$('#beat3Con').hide()
$('#beat4Con').hide()
$('#beat5Con').hide()
$('#beat6Con').hide()
$('#beat7Con').hide()
$('#beat8Con').hide()
$('#beat9Con').hide()
$('#beat10Con').hide()
$('#beat11Con').hide()
$('#beat12Con').hide()

beat1.pause()
beat1.currentTime=0
beat2.pause()
beat2.currentTime=0
beat3.pause()
beat3.currentTime=0
beat4.pause()
beat4.currentTime=0
beat5.pause()
beat5.currentTime=0
beat6.pause()
beat6.currentTime=0
beat7.pause()
beat7.currentTime=0
beat8.pause()
beat8.currentTime=0
beat9.pause()
beat9.currentTime=0
beat10.pause()
beat10.currentTime=0
beat11.pause()
beat11.currentTime=0
beat12.pause()
beat12.currentTime=0

}
}

// Single Audio control

// Set Duration

// Beat1

$(beat1).on('timeupdate', function(){

var totDuration = Math.floor(beat1.duration)

$('#B1duration').prop('max', totDuration)

var currentTime = Math.floor(beat1.currentTime)

$('#B1duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec1').text("0"+seconds)
}else{
$('#sec1').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min1').text("0"+ min + ":")

})

function seekDuration(){

var getDuration = $('#B1duration').val()

beat1.currentTime = getDuration

}

// Beat 2

$(beat2).on('timeupdate', function(){

var totDuration = Math.floor(beat2.duration)

$('#B2duration').prop('max', totDuration)

var currentTime = Math.floor(beat2.currentTime)

$('#B2duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec2').text("0"+seconds)
}else{
$('#sec2').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min2').text("0"+ min + ":")

})

function seekDuration2(){

var getDuration = $('#B2duration').val()

beat2.currentTime = getDuration

}

// Beat 3

$(beat3).on('timeupdate', function(){

var totDuration = Math.floor(beat3.duration)

$('#B3duration').prop('max', totDuration)

var currentTime = Math.floor(beat3.currentTime)

$('#B3duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec3').text("0"+seconds)
}else{
$('#sec3').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min3').text("0"+ min + ":")

})

function seekDuration3(){

var getDuration = $('#B3duration').val()

beat3.currentTime = getDuration

}

// Beat 4

$(beat4).on('timeupdate', function(){

var totDuration = Math.floor(beat4.duration)

$('#B4duration').prop('max', totDuration)

var currentTime = Math.floor(beat4.currentTime)

$('#B4duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec4').text("0"+seconds)
}else{
$('#sec4').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min4').text("0"+ min + ":")

})

function seekDuration4(){

var getDuration = $('#B4duration').val()

beat4.currentTime = getDuration

}

// Beat 5

$(beat5).on('timeupdate', function(){

var totDuration = Math.floor(beat5.duration)

$('#B5duration').prop('max', totDuration)

var currentTime = Math.floor(beat5.currentTime)

$('#B5duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec5').text("0"+seconds)
}else{
$('#sec5').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min5').text("0"+ min + ":")

})

function seekDuration5(){

var getDuration = $('#B5duration').val()

beat5.currentTime = getDuration

}

// Beat 6

$(beat6).on('timeupdate', function(){

var totDuration = Math.floor(beat6.duration)

$('#B6duration').prop('max', totDuration)

var currentTime = Math.floor(beat6.currentTime)

$('#B6duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec6').text("0"+seconds)
}else{
$('#sec6').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min6').text("0"+ min + ":")

})

function seekDuration6(){

var getDuration = $('#B6duration').val()

beat6.currentTime = getDuration

}

// Beat 7

$(beat7).on('timeupdate', function(){

var totDuration = Math.floor(beat7.duration)

$('#B7duration').prop('max', totDuration)

var currentTime = Math.floor(beat7.currentTime)

$('#B7duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec7').text("0"+seconds)
}else{
$('#sec7').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min7').text("0"+ min + ":")

})

function seekDuration7(){

var getDuration = $('#B7duration').val()

beat7.currentTime = getDuration

}

// Beat 8

$(beat8).on('timeupdate', function(){

var totDuration = Math.floor(beat8.duration)

$('#B8duration').prop('max', totDuration)

var currentTime = Math.floor(beat8.currentTime)

$('#B8duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec8').text("0"+seconds)
}else{
$('#sec8').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min8').text("0"+ min + ":")

})

function seekDuration8(){

var getDuration = $('#B8duration').val()

beat8.currentTime = getDuration

}

// Beat 9

$(beat9).on('timeupdate', function(){

var totDuration = Math.floor(beat9.duration)

$('#B9duration').prop('max', totDuration)

var currentTime = Math.floor(beat9.currentTime)

$('#B9duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec9').text("0"+seconds)
}else{
$('#sec9').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min9').text("0"+ min + ":")

})

function seekDuration9(){

var getDuration = $('#B9duration').val()

beat9.currentTime = getDuration

}

// Beat 10

$(beat10).on('timeupdate', function(){

var totDuration = Math.floor(beat10.duration)

$('#B10duration').prop('max', totDuration)

var currentTime = Math.floor(beat10.currentTime)

$('#B10duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec10').text("0"+seconds)
}else{
$('#sec10').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min10').text("0"+ min + ":")

})

function seekDuration10(){

var getDuration = $('#B10duration').val()

beat10.currentTime = getDuration

}

// Beat 11

$(beat11).on('timeupdate', function(){

var totDuration = Math.floor(beat11.duration)

$('#B11duration').prop('max', totDuration)

var currentTime = Math.floor(beat11.currentTime)

$('#B11duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec11').text("0"+seconds)
}else{
$('#sec11').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min11').text("0"+ min + ":")

})

function seekDuration11(){

var getDuration = $('#B11duration').val()

beat11.currentTime = getDuration

}

// Beat 12

$(beat12).on('timeupdate', function(){

var totDuration = Math.floor(beat12.duration)

$('#B12duration').prop('max', totDuration)

var currentTime = Math.floor(beat12.currentTime)

$('#B12duration').prop('value',currentTime)

// set Timer on html
var seconds = currentTime % 60
if(seconds < 10){
$('#sec12').text("0"+seconds)
}else{
$('#sec12').text(seconds)
}
var min = Math.floor(currentTime/60)

$('#min12').text("0"+ min + ":")

})

function seekDuration12(){

var getDuration = $('#B12duration').val()

beat12.currentTime = getDuration

}

// loop Audio

function setLoop(){
if($('#loop1').is(':checked')){

$(beat1).prop('loop', true)

}else{
$(beat1).prop('loop', false)
}

if($('#loop2').is(':checked')){

$(beat2).prop('loop', true)

}else{
$(beat2).prop('loop', false)
}

if($('#loop3').is(':checked')){

$(beat3).prop('loop', true)

}else{
$(beat3).prop('loop', false)
}

if($('#loop4').is(':checked')){

$(beat4).prop('loop', true)

}else{
$(beat4).prop('loop', false)
}

if($('#loop5').is(':checked')){

$(beat5).prop('loop', true)

}else{
$(beat5).prop('loop', false)
}

if($('#loop6').is(':checked')){

$(beat6).prop('loop', true)

}else{
$(beat6).prop('loop', false)
}

if($('#loop7').is(':checked')){

$(beat7).prop('loop', true)

}else{
$(beat7).prop('loop', false)
}

if($('#loop8').is(':checked')){

$(beat8).prop('loop', true)

}else{
$(beat8).prop('loop', false)
}

if($('#loop9').is(':checked')){

$(beat9).prop('loop', true)

}else{
$(beat9).prop('loop', false)
}

if($('#loop10').is(':checked')){

$(beat10).prop('loop', true)

}else{
$(beat10).prop('loop', false)
}

if($('#loop11').is(':checked')){

$(beat11).prop('loop', true)

}else{
$(beat11).prop('loop', false)
}

if($('#loop12').is(':checked')){

$(beat12).prop('loop', true)

}else{
$(beat12).prop('loop', false)
}
}