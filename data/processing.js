/* Chapter 1: processing. Edit the text here, not in the HTML.
   D = methods (colours, cup notes, facts), G = gauge values taken from the notes,
   GN = gauge names, R = process steps in order ([name, used-by flags, shared-phase flag, text, per-method text]). */
(function(){
var D=[
{id:"washed",c:{f:["#E1F5EE","#04342C"],s:["#0F6E56","#5DCAA5"],t:["#085041","#9FE1CB"]},n:"Washed",tag:"Clean and complex, with fewer defects",fl:["clean","complex","higher acidity"],bad:[],st:["Acidity: higher","Clean, complex"],
f:[["cost","Expensive"],["risk","Wastewater can be toxic"],["temp","Hotter means faster fermentation"]]},
{id:"pulped",c:{f:["#EAF3DE","#173404"],s:["#3B6D11","#97C459"],t:["#27500A","#C0DD97"]},n:"Pulped natural",tag:"Sweeter, with fewer defects",fl:["sweeter","sugar stays"],bad:[],st:["Sweeter","Sugar stays"],
f:[["pin","Mainly Brazil"],["water","Aims to use less water"]]},
{id:"honey",c:{f:["#FAEEDA","#412402"],s:["#854F0B","#EF9F27"],t:["#633806","#FAC775"]},n:"Honey",tag:"Cup notes still to add",fl:[],bad:[],st:["To fill in",""],
f:[["pin","Mostly Central America"],["water","Even less water than pulped natural"],["risk","Higher fermentation and defect risk"]]},
{id:"natural",c:{f:["#FAECE7","#4A1B0C"],s:["#993C1D","#F0997B"],t:["#712B13","#F5C4B3"]},n:"Natural",tag:"Fruity, or funky when it goes wrong",fl:["blueberry","strawberry","tropical fruit"],bad:["barnyard","wild","fermented","manure"],st:["Fruity or funky","Berry, tropical"],
f:[["pin","Ethiopia, parts of Brazil"],["water","Chosen where water is scarce"],["time","Oldest method"],["risk","Prone to defects"],["cost","Often used for cheap bulk coffee"]]},
{id:"semi",c:{f:["#E6F1FB","#042C53"],s:["#185FA5","#85B7EB"],t:["#0C447C","#B5D4F4"]},n:"Semi-washed",tag:"Low acidity, full body",fl:["wood","earthy","musty","spice","tobacco","leather"],bad:[],st:["Acidity: lower","More body"],
f:[["pin","Mostly Indonesia (Giling Basah)"]]}
];
var G={washed:{a:[4,"higher"]},semi:{a:[2,"lower"],b:[4,"fuller"]}};
var GN=[["a","Acidity"],["b","Body"],["r","Bitterness"],["s","Sweetness"]];
var R=[
["Depulp","11101",1,"The skin and fruit flesh are stripped off mechanically. Natural coffee skips this and is dried as a whole cherry.",["Strips the outer skin and the fruit flesh.","Strips all the skin and much of the flesh, using less water.","Uses even less water. Results range from 100% honey to 20% honey, depending on how much mucilage (miel) stays.","","Skin and flesh are removed."]],
["Ferment in tank","10000",1,"Beans sit in a clean tank or trough. Fermentation breaks down the pectin, the water turns gelatinous and the last flesh comes off. The hotter it is, the faster it goes. Wastewater can be toxic.",[]],
["Wash","10000",1,"Removes leftover debris.",[]],
["Sun-dry","11111",1,"Every method dries in the sun, but how much fruit is still on the bean differs.",["Dried to 11-12% moisture, sometimes with mechanical dryers.","Less flesh means a lower defect risk, but enough sugar stays to add sweetness.","More flesh left on, so the risk of fermentation and defects is higher.","Whole cherry in a thin layer, turned regularly against mould, rot and fermentation.","A quick dry, only to 30-35% moisture."]],
["Remove dried husk","00010",1,"The dried outer husk is removed mechanically.",[]],
["Hull while wet","00001",1,"The parchment is stripped while the bean is still wet (Giling Basah).",[]],
["Final dry","00001",1,"A second drying after hulling. It gives the beans a swamp-green colour.",[]],
["Rest (reposo)","11111",0,"Beans rest for 30-60 days before export.",[]],
["Dry hulling","11110",0,"Mechanically removes the parchment, which stays on until now. Semi-washed was already hulled wet.",[]],
["Sort defects","11111",0,"Defects are sorted out by colour and size.",[]],
["Size and grade","11111",0,"Done before roasting, so evenly sized beans are roasted together.",[]],
["Bag in jute","11111",0,"Packed in jute bags for shipping.",[]]
];
window.CHAPTER={
  slug:"processing",
  title:"From cherry to green coffee",
  sub:"Chapter 1, processing. Source: The World Atlas of Coffee. Pick a method to see its path and its cup.",
  pageTitle:"Processing | Coffee atlas",
  pathLabel:"The path",
  D:D,G:G,GN:GN,R:R,
  glossary:[
  ["Pectin","Substance in the fruit flesh. Fermentation breaks it down and the water turns gelatinous."],
  ["Mucilage (miel)","The sticky fruit layer left on the bean in the honey process. Miel means honey."],
  ["Parchment (pergamino)","The papery layer around the bean. It stays on until dry hulling."],
  ["Reposo","The resting period of 30-60 days before export."],
  ["Giling Basah","Indonesian wet-hulling, the semi-washed method."],
  ["Moisture targets","Washed coffee finishes at 11-12%. Semi-washed is first dried to only 30-35%."]
  ]
};
})();
