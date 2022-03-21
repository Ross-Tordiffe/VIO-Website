(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VIO202Project1_atlas_1", frames: [[0,0,1904,1237]]},
		{name:"VIO202Project1_atlas_2", frames: [[0,0,1148,1313]]},
		{name:"VIO202Project1_atlas_3", frames: [[0,0,1035,1313]]},
		{name:"VIO202Project1_atlas_4", frames: [[0,0,1151,1167]]},
		{name:"VIO202Project1_atlas_5", frames: [[0,0,1151,1167]]},
		{name:"VIO202Project1_atlas_6", frames: [[0,0,897,1237],[0,1490,410,117],[440,1239,390,173],[0,1239,438,249],[412,1490,6,6],[832,1239,194,265]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_12 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["VIO202Project1_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["VIO202Project1_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["VIO202Project1_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2385,1549);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["VIO202Project1_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["VIO202Project1_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["VIO202Project1_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.S7_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-224.5,-309.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S7_frame, new cjs.Rectangle(-224.5,-309.3,448.5,618.5), null);


(lib.S6_sling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-102.55,-30.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(-97.5,-43.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6_sling, new cjs.Rectangle(-102.5,-43.2,205,86.5), null);


(lib.S6_gun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("ApuDKIAAmTITdAAIAAGTgApXCuISuAAIAAlcIyuAAg");
	this.shape.setTransform(0.2,0.675);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6_gun, new cjs.Rectangle(-62.1,-19.5,124.6,40.4), null);


(lib.S6_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-476.65,-309.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6_frame, new cjs.Rectangle(-476.6,-309.5,952,618.5), null);


(lib.S6_cd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("Ao1EIIAAoPIRqAAIAAIPgAoVDoIQrAAIAAnPIwrAAg");
	this.shape.setTransform(-0.2,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6_cd, new cjs.Rectangle(-56.7,-26.4,113.1,52.8), null);


(lib.S6_bat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("Ah5NgIAA6/IDyAAIAAa/gAhmNNIDMAAIAA6ZIjMAAg");
	this.shape.setTransform(0.1,0.091,1,0.8199);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6_bat, new cjs.Rectangle(-12,-70.7,24.3,141.60000000000002), null);


(lib.pre = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF50DE").p("EAiKAOIMhETAAAIAA8PMBETAAAg");
	this.shape.setTransform(0,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pre, new cjs.Rectangle(-219.6,-89.8,439.2,182.8), null);


(lib.post = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF50DE").p("EAiKAOIMhETAAAIAA8PMBETAAAg");
	this.shape.setTransform(0,1.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.post, new cjs.Rectangle(-219.6,-89.8,439.2,182.8), null);


(lib.S5_click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF50DE").p("ACyAbIljAAIAAg1IFjAAg");
	this.shape.setTransform(-0.0054,1.5596,12.2811,34.1142);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AixAaIAAgzIFjAAIAAAzg");
	this.shape_1.setTransform(-0.0054,1.5596,12.2811,34.1142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S5_click, new cjs.Rectangle(-219.6,-89.8,439.2,182.8), null);


(lib.S4_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-258.6,-328.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S4_frame, new cjs.Rectangle(-258.6,-328.4,517.5,656.5), null);


(lib.S4_click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("AxHVhMAAAgrBMAiPAAAMAAAArBgAw9VXMAh7AAAMAAAgqtMgh7AAAg");
	this.shape.setTransform(-0.3036,-0.7333,2.5589,2.5589);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S4_click, new cjs.Rectangle(-280.7,-353.1,560.8,704.8), null);


(lib.S35_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-287.95,-329.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S35_frame, new cjs.Rectangle(-287.9,-329.4,574,656.5), null);


(lib.S3_slot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF50DE").p("AKxBnI1hAAIAAjNIVhAAg");
	this.shape.setTransform(-0.05,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S3_slot, new cjs.Rectangle(-69.9,-11.1,139.8,22.5), null);


(lib.S3_chip = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF50DE").p("AvR0YIejADMAAAAouI+jAAg");
	this.shape.setTransform(0.5029,-0.5684,0.5785,0.5785);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S3_chip, new cjs.Rectangle(-57.1,-77,115.2,153), null);


(lib.head_stat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("ArFGUIAAsnIWLAAIAAMngAqlF0IVLAAIAArnI1LAAg");
	this.shape.setTransform(0.0228,-0.9728,1.5442,1.5442);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_stat, new cjs.Rectangle(-109.5,-63.3,219.1,124.69999999999999), null);


(lib.head_on = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("ArFGUIAAsnIWLAAIAAMngAqlF0IVLAAIAArnI1LAAg");
	this.shape.setTransform(0.0228,0.0272,1.5442,1.5442);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_on, new cjs.Rectangle(-109.5,-62.3,219.1,124.69999999999999), null);


(lib.S2_head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-110.05,-62.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(77.5,11.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_head, new cjs.Rectangle(-110,-62.2,219,124.5), null);


(lib.S2_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-596,-387.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_frame, new cjs.Rectangle(-596,-387.5,1192.5,774.5), null);


(lib.cry_stat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cry_move = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.S2_crystal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("AmYDfIAAm9IMyAAIAAG9gAl8DKIL5AAIAAmTIr5AAg");
	this.shape.setTransform(-0.4706,-0.5381,1.3587,1.3587);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({scaleX:1,scaleY:1,x:0.5,y:-1.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-30.8,111.30000000000001,60.6);


(lib.crim_stat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("EgVbAqpMAAAhVRMAq3AAAMAAABVRgEgU+AqMMAp9AAAMAAAhUYMgp9AAAg");
	this.shape.setTransform(-1.025,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.crim_stat, new cjs.Rectangle(-138.2,-274.9,274.4,545.7), null);


(lib.crim_cap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.S2_crim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("EgVbAqpMAAAhVRMAq3AAAMAAABVRgEgU+AqMMAp9AAAMAAAhUYMgp9AAAg");
	this.shape.setTransform(-1.025,0.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_crim, new cjs.Rectangle(-138.2,-272.4,274.4,545.7), null);


(lib.S2_cd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("Ak1BHIAAiMIJsAAIAACMgAkrA8IJXAAIAAh3IpXAAg");
	this.shape.setTransform(31.05,7.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_cd, new cjs.Rectangle(0,0,62.1,14.1), null);


(lib.S2_cape2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").p("AI0yeIxnAAMAAAAk9IRnAAg");
	this.shape.setTransform(0.425,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_cape2, new cjs.Rectangle(-56.9,-120.8,114.69999999999999,238.7), null);


(lib.cap_stat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.S2_cape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").p("AI0yeIxnAAMAAAAk9IRnAAg");
	this.shape.setTransform(0.425,-1.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2_cape, new cjs.Rectangle(-56.9,-120.8,114.69999999999999,238.7), null);


(lib.S1_light = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF00FF").p("AtI9pIaRAAMAAAA7TI6RAAg");
	this.shape.setTransform(0.025,-99.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S1_light, new cjs.Rectangle(-85.1,-290.5,170.3,381.5), null);


(lib.S1_frame2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-288,-291.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S1_frame2, new cjs.Rectangle(-288,-291.2,575.5,583.5), null);


(lib.S1_frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-288.45,-291.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-27.2,-93,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S1_frame, new cjs.Rectangle(-288.4,-291.4,575.5,583.5), null);


(lib.S1_click = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF50DE").s().p("AxHRMMAAAgiXMAiOAAAMAAAAiXgAw9RCMAh6AAAMAAAgiDMgh6AAAg");
	this.shape.setTransform(0.183,1.1291,2.8803,2.8803);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S1_click, new cjs.Rectangle(-315.3,-315.7,631,633.7), null);


(lib.S7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.S7_frame();
	this.instance.setTransform(104.5,144.2,1,1,0,0,0,104.5,144.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S7, new cjs.Rectangle(-224.5,-309.3,448.5,618.5), null);


(lib.S6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Interaction
	this.instance = new lib.S6_bat();
	this.instance.setTransform(405.05,160,1,1,0,0,0,6.4,45.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Interaction
	this.instance_1 = new lib.S6_sling();
	this.instance_1.setTransform(242.2,156.05,1,1,0,0,0,48.4,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Interaction
	this.instance_2 = new lib.S6_gun();
	this.instance_2.setTransform(310.05,236,1,1,0,0,0,26.4,7.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Interaction
	this.instance_3 = new lib.S6_cd();
	this.instance_3.setTransform(97.05,261.95,1,1,0,0,0,17.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// flash0_ai
	this.instance_4 = new lib.S6_frame();
	this.instance_4.setTransform(241.4,156.7,1,1,0,0,0,241.4,156.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S6, new cjs.Rectangle(-476.6,-309.5,952,618.5), null);


(lib.S4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.S4_click();
	this.instance.setTransform(203.3,91.2,1,1,0,0,0,109.5,137.7);

	this.instance_1 = new lib.S4_frame();
	this.instance_1.setTransform(104,132.3,1,1,0,0,0,104.5,132.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S4, new cjs.Rectangle(-259.1,-399.6,633,727.3), null);


(lib.S3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.S3_slot();
	this.instance.setTransform(116.05,122.05,1,1,0,0,0,17.8,2.6);

	this.instance_1 = new lib.S3_chip();
	this.instance_1.setTransform(191.2,214.1,1,1,0,0,0,35.1,46.8);

	this.instance_2 = new lib.S35_frame();
	this.instance_2.setTransform(116,132.7,1,1,0,0,0,116,132.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.9,-329.4,574,656.5);


(lib.S2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.S2_head();
	this.instance.setTransform(-156.9,-46.85,1,1,0,0,0,22.9,13.1);

	this.instance_1 = new lib.S2_crim();
	this.instance_1.setTransform(-0.2,-3.95,1,1,0,0,0,49,97.4);

	this.instance_2 = new lib.S2_cd();
	this.instance_2.setTransform(162.25,56.1,1,1,0,0,0,31.1,7);

	this.instance_3 = new lib.S2_frame();
	this.instance_3.setTransform(241.4,156.7,1,1,0,0,0,241.4,156.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S2, new cjs.Rectangle(-596,-387.5,1192.5,774.5), null);


(lib.S1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Interaction
	this.instance = new lib.S1_click();
	this.instance.setTransform(-317.95,-319.6,1,1,0,0,0,330.6,331.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.S1, new cjs.Rectangle(-963.9,-967.2,631.0999999999999,633.7), null);


// stage content:
(lib.VIO202Project1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//===Set up
		
		//General
		let mScope = this;
		let c = createjs;
		c.Touch.enable(stage);
		let midx = 960;
		let midy = 540;
		let canvas = document.getElementsByTagName('canvas')[0];
		
		let dist = 0;
		
		//Slide
		let start = 0;
		let amount = 0;
		let amountY = 0;
		
		let down = false;
		
		let count = 12;
		
		//Tickers
		
		tick1_on = false;
		
		//Drag
		
		let preX_cape = 0;
		let preY_cape = 0;
		
		let preX_crystal = 0;
		let preY_crystal = 0;
		
		let preX_head = 0;
		let preY_head = 0;
		
		let preX_chip = 0;
		let preY_chip = 0;
		
		let complete = 0;
		
		//Scenes
		
		let S1 = new c.Container();
		let S2 = new c.Container();
		let S35 = new c.Container();
		let S4 = new c.Container();
		let S6 = new c.Container();
		let S7 = new c.Container();
		
		let Canvas = new c.Container();
		
		Canvas.addChild(S1);
		Canvas.addChild(S2);
		Canvas.addChild(S35);
		Canvas.addChild(S4);
		Canvas.addChild(S6);
		Canvas.addChild(S7);
		
		//S1 & S1_2
		
		let s1_f = new lib.S1_frame();
		s1_f.x = midx;
		s1_f.y = midy;
		
		let s1_f2 = new lib.S1_frame2();
		s1_f2.x = midx;
		s1_f2.y = midy;
		
		let s1_light = new lib.S1_light();
		s1_light.x = midx;
		s1_light.y = midy;
		
		let s1_click = new lib.S1_click();
		s1_click.x = midx;
		s1_click.y = midy;
		
		//S2
		
		let s2_f = new lib.S2_frame();
		s2_f.x = midx + s1_f.nominalBounds.width + 400;
		s2_f.y = midy;
		
		let s2_crystal = new lib.S2_crystal();
		s2_crystal.x = midx + s1_f.nominalBounds.width + 120;
		s2_crystal.y = midy - 290;
		
		let cry_stat = new lib.cry_stat();
		
		let cry_move = new lib.cry_move();
		
		let s2_crim = new lib.S2_crim();
		s2_crim.x = midx + s1_f.nominalBounds.width + 400;
		s2_crim.y = midy +25;
		
		let s2_head = new lib.S2_head();
		s2_head.x = midx + s1_f.nominalBounds.width + 0;
		s2_head.y = midy;
		
		let head_stat = new lib.head_stat();
		
		let head_on = new lib.head_on();
		
		let s2_cape = new lib.S2_cape();
		s2_cape.x = midx + s1_f.nominalBounds.width + 400 + 250;
		s2_cape.y = midy - 75;
		
		let cap_stat = new lib.cap_stat();
		
		let crim_cap = new lib.crim_cap();
		
		//S3
		
		let s35_f = new lib.S35_frame();
		s35_f.x = midx + s1_f.nominalBounds.width - 200;
		s35_f.y = midy + 775;
		
		let s3_chip = new lib.S3_chip();
		s3_chip.x = midx + s1_f.nominalBounds.width + 20;
		s3_chip.y = midy + 1020;
		let s3_slot = new lib.S3_slot();
		s3_slot.x = midx + s1_f.nominalBounds.width - 200;
		s3_slot.y = midy + 950;
		
		//S4 
		
		let s4_f = new lib.S4_frame();
		s4_f.x = midx + s1_f.nominalBounds.width + 450;
		s4_f.y = midy + 775;
		
		let s4_click = new lib.S4_click();
		s4_click.x = midx + s1_f.nominalBounds.width + 450;
		s4_click.y = midy + 775;
		
		//S5
		
		let s5_click = new lib.S5_click();
		s5_click.x = (midx + s1_f.nominalBounds.width - 200);
		s5_click.y = midy + 750;
		
		let post = new lib.post();
		
		let pre = new lib.pre();
		
		//S6
		
		let s6_f = new lib.S6_frame();
		s6_f.x = (midx + s1_f.nominalBounds.width - 200);
		s6_f.y = midy + 1500;
		
		let s6_bat = new lib.S6_bat();
		s6_bat.x = (midx + s1_f.nominalBounds.width + 90);
		s6_bat.y = midy + 1550;
		
		let s6_gun = new lib.S6_gun();
		s6_gun.x = (midx + s1_f.nominalBounds.width - 100);
		s6_gun.y = midy + 1620;
		
		let s6_cd = new lib.S6_cd();
		s6_cd.x = (midx + s1_f.nominalBounds.width - 480);
		s6_cd.y = midy + 1620;
		
		let s6_sling = new lib.S6_sling();
		s6_sling.x = (midx + s1_f.nominalBounds.width - 200);
		s6_sling.y = midy + 1500;
		
		//S7
		let s7_f = new lib.S7_frame();
		s7_f.x = (midx + s1_f.nominalBounds.width + 600);
		s7_f.y = midy + 1480;
		
		//===Functions
		
		set1();
		
		
		
		function set1(){
			mScope.addChild(Canvas);
			stage.addChild(Canvas);
			S1.addChild(s1_f);
			S1.addChild(s1_light);
			S1.addChild(s1_click);
			s1_f.addEventListener("click", set1_2);
		}
		
		function set1_2(){
			s1_f.removeEventListener("click", set1_2);
			S1.addChild(s1_f2);
			S1.removeChild(s1_light);
			S1.removeChild(s1_f);
			s1_f2.addEventListener("click", set2);
		}
		
		function set2(){
			s1_f2.removeEventListener("click", set2);
			
			S2.addChild(s2_f);
			
			S2.addChild(s2_crim);
			s2_crim.addChild(crim_cap);
			crim_cap.visible = false;
		
			S2.addChild(s2_cape);
			s2_cape.addChild(cap_stat);
			
			S2.addChild(s2_crystal);
			s2_crystal.addChild(cry_stat);
			s2_crystal.addChild(cry_move);
			cry_move.visible = false;
			
			S2.addChild(s2_head);
			s2_head.addChild(head_stat);
			s2_head.addChild(head_on);
			head_on.visible = false;
			
			s2_head.rotation -= 20;
			
			dist = 975;
			start = Canvas.x;
			amount = 6;
			c.Ticker.addEventListener("tick", slide_left);
			
			//Cape
			preX_cape = s2_cape.x;
			preY_cape = s2_cape.y;
			
			let cape_active = true;
			if(cape_active){
				s2_cape.on("pressmove", function(evt) {
					let p = mScope.globalToLocal(evt.stageX, evt.stageY)
					s2_cape.x = p.x + 975;
					s2_cape.y = p.y;
				});
				s2_cape.on("pressup", function(evt) {
					if(s2_cape.x < (s2_crim.x + 140) && s2_cape.x > (s2_crim.x - 140) && s2_cape.y > (s2_crim.y - 260) && s2_cape.y < (s2_crim.y + 260)){
						console.log("in");
						s2_cape.visible = false;
						crim_cap.visible = true;
						complete++;
						cape_active = false;
						if(complete >= 3){
							set3();
						}
					}
					else {
						console.log("out", s2_crim.y - 180, s2_crim.y + 180, s2_cape.y);
						s2_cape.x = preX_cape;
						s2_cape.y = preY_cape;
					} 
				});
			}
		
		
			
			//Crystal
			preX_crystal = s2_crystal.x;
			preY_crystal = s2_crystal.y;
			
			let cry_active = true;
			
				let cy_change = 0;
				s2_crystal.on("pressmove", function(evt) {
					if(cry_active == true){
						let p = mScope.globalToLocal(evt.stageX, evt.stageY)
						s2_crystal.x = p.x + 975;
						s2_crystal.y = p.y;
						console.log("inasdasda");
						if(cy_change == 0){
							cy_change = 1;
							cry_stat.visible = false;
							cry_move.visible = true;
							console.log("GGGGGGG");
						}
					}
				});
				s2_crystal.on("pressup", function(evt) {
					if(cry_active == true){
						if(s2_crystal.x < (s2_crim.x + 140) && s2_crystal.x > (s2_crim.x - 140) && s2_crystal.y > (s2_crim.y - 260) && s2_crystal.y < (s2_crim.y + 260)){
							console.log("in");
							complete++;
							s2_crystal.x = midx + s1_f.nominalBounds.width + 405;
							s2_crystal.y = midy - 80;
							cry_active = false;
							if(complete >= 3){
								set3();
							}
						}
						else {
							console.log("out", s2_crystal.y, s2_crystal.x);
							s2_crystal.x = preX_crystal;
							s2_crystal.y = preY_crystal;
							cry_move.visible = false;
							cry_stat.visible = true;
						}
						console.log("out", s2_crystal.y, s2_crystal.x);
						cy_change = 0;
					}
				});
		
		
			//Head
		
			preX_head = s2_head.x;
			preY_head = s2_head.y;
			
			let head_active = true;
			
			s2_head.on("mousedown", function(evt) {
				if(head_active == true){
					s2_head.rotation += 20;
				}
			});
			s2_head.on("pressmove", function(evt) {
				if(head_active == true){
					let p = mScope.globalToLocal(evt.stageX, evt.stageY)
					s2_head.x = p.x + 975;
					s2_head.y = p.y;
				}
			});
			s2_head.on("pressup", function(evt) {
				if(head_active == true){
					s2_head.rotation -= 20;
					if(s2_head.x < (s2_crim.x + 140) && s2_head.x > (s2_crim.x - 140) && s2_head.y > (s2_crim.y - 260) && s2_head.y < (s2_crim.y + 260)){
						console.log("in");
						complete++;
						s2_head.x = midx + s1_f.nominalBounds.width + 405;
						s2_head.y = midy - 260;
						s2_head.rotation += 20;
						head_active = false;
						if(complete >= 3){
							set3();
						}
					}
					else {
						console.log("out", s2_crim.y - 180, s2_crim.y + 180, s2_head.y);
						s2_head.x = preX_head;
						s2_head.y = preY_head;
						head_stat.visible = false;
						head_on.visible = true;
					}
				}
			})
			
			//s2_cape.addEventListener("click", mfTick);
		}
		
		function set3(){
			S35.addChild(s35_f);
			S35.addChild(s3_slot);
			S35.addChild(s3_chip);
			
			dist = 550;
			start = Canvas.x;
			amount = 3;
			amountY = 3;
			
			c.Ticker.addEventListener("tick", slide_rightdown);
			
			//Chip
			complete = 0;
			preX_chip = s3_chip.x;
			preY_chip = s3_chip.y;
			
			let tries = 0;
			
			s3_chip.on("pressmove", function(evt) {
				if(tries <= 2){
					let p = mScope.globalToLocal(evt.stageX, evt.stageY)
					s3_chip.x = p.x + 425;
					s3_chip.y = p.y + 750;
				}
			});
			s3_chip.on("pressup", function(evt) {
				if(tries <= 2){
					if(s3_chip.x < (s3_slot.x + 90) && s3_chip.x > (s3_slot.x - 90) && s3_chip.y > (s3_slot.y - 40) && s3_chip.y < (s3_slot.y + 40)){
						complete++;
					
						if(tries == 0){
							s3_chip.rotation += 20;
							tries++;
						}
						else if(tries == 1){
							s3_chip.rotation -= 30;
							tries++;
						}
						else {
							s3_chip.rotation += 20;
							tries++;
						}
					}
					
						s3_chip.x = preX_chip;
						s3_chip.y = preY_chip;
						
						if(complete >= 3){
							set4();
						}
				}
			})
		}
		
		function set4(){
			S4.addChild(s4_f);
			S4.addChild(s4_click);
		
			
			dist = 650;
			start = Canvas.x;
			amount = 10;
			
			c.Ticker.addEventListener("tick", slide_left);
			
			s4_f.addEventListener("click", set5);
		}
		
		function set5(){
			s4_f.removeEventListener("click", set5);
			dist = 650;
			start = Canvas.x;
			amount = 10;
			
			S35.addChild(s5_click);
			s5_click.addChild(pre);
			s5_click.addChild(post);
			post.visible = false;
			pre.visible = true;
			c.Ticker.addEventListener("tick", slide_right);
			
		}
		
		function set6(){
			slide_zoomout();
			amountY = 3;
			dist = 775;
			start = Canvas.y;
			c.Ticker.addEventListener("tick", slide_down);
			
			S6.addChild(s6_f);
			S6.addChild(s6_bat);
			S6.addChild(s6_gun);
			S6.addChild(s6_cd);
			
			s6_bat.addEventListener("click", bat_msg);
			s6_gun.addEventListener("click", gun_msg);
			s6_cd.addEventListener("click", sling);
		}
		
		function set7(){
			dist = 850;
			start = Canvas.x;
			amount = 10;
			
			c.Ticker.addEventListener("tick", slide_left);
			
			S7.addChild(s7_f);
		}
		
		function sling(){
			S6.addChild(s6_sling);
			s6_sling.addEventListener("click", set7);
		}
		
		function gun_msg(){
			s6_bat.removeEventListener("click", gun_msg);
		}
		
		function bat_msg(){
			s6_bat.removeEventListener("click", bat_msg);
		}
		
		
		//Slides
		function slide_left(){
				Canvas.x -= amount;
			if(Canvas.x - start >= (-1 * (dist / 2.05))) {
				amount *= 1.1;
			}
			else{
				//Canvas.x -= amount;
				if(amount > 2)
					amount /= 1.1;
			}
			if(Canvas.x - start < (-1 * dist)){
				Canvas.x = start - dist;
				dist = 0;
				c.Ticker.removeEventListener("tick", slide_left);
			}
		}
		
		function slide_right(){
				Canvas.x += amount;
			if(Canvas.x < start + dist / 2.05) {
				amount *= 1.1;
			}
			else{
				if(amount > 2)
					amount /= 1.1;
				}
			if(Canvas.x > start + dist){
				Canvas.x = start + dist;
				dist = 0;
				startZoom = true;
				c.Ticker.removeEventListener("tick", slide_right);
				amount = 1.001;
				c.Ticker.addEventListener("tick", slide_zoomin);
			}
		}
		
		function slide_rightdown(){
				Canvas.x += amount;
				Canvas.y -= amountY;
			if(Canvas.x < start + (dist / 2)){
				amount *= 1.1;
				amountY *= 1.129;
			}
			else{
				if(amount > 5)
					amount /= 1.095;
					amountY /= 1.2;
			}
			if(Canvas.x > start + dist){
				Canvas.x = start + dist;
				dist = 0;
				c.Ticker.removeEventListener("tick", slide_rightdown);
			}
		}
		
		function slide_down(){
			Canvas.y -= amountY;
			console.log(Canvas.y, start, (-1 * (dist)), (start - (-1 * dist)));
			if(Canvas.y > (start + (-1 * (dist / 2.05)))) {
				amountY *= 1.2;
			}
			else{
				if(amountY > 5)
					amountY /= 1.1;
			}
			if(Canvas.y < (start + (-1 * dist))){
				Canvas.y = start - dist;
				c.Ticker.removeEventListener("tick", slide_down);
			}
		}
		
		function slide_zoomin(){
			if(count > 0){
				count--;
			}
			else {
				post.visible = true;
				pre.visible = false
				Canvas.scale *= 1.5;
				Canvas.x -= 600;
				Canvas.y -= 500;
				count = 6;
				c.Ticker.removeEventListener("tick", slide_zoomin);
				s35_f.addEventListener("click", set6);
			}
		}
		
		function slide_zoomout(){
					Canvas.scale /= 1.5;
					Canvas.x += 600;
					Canvas.y += 500;
					s35_f.removeEventListener("click", set6);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'F65C90F6B49A034597F31D4697A57241',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_4.png?1647866525259", id:"CachedBmp_4"},
		{src:"images/VIO202Project1_atlas_1.png?1647866525225", id:"VIO202Project1_atlas_1"},
		{src:"images/VIO202Project1_atlas_2.png?1647866525225", id:"VIO202Project1_atlas_2"},
		{src:"images/VIO202Project1_atlas_3.png?1647866525225", id:"VIO202Project1_atlas_3"},
		{src:"images/VIO202Project1_atlas_4.png?1647866525225", id:"VIO202Project1_atlas_4"},
		{src:"images/VIO202Project1_atlas_5.png?1647866525225", id:"VIO202Project1_atlas_5"},
		{src:"images/VIO202Project1_atlas_6.png?1647866525225", id:"VIO202Project1_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F65C90F6B49A034597F31D4697A57241'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;