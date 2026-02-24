
# # 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans :

getElementById("id")--> shudhumatro ekti element select kore1! and id diye khuje ber kore, and always ekta element e return kore.... 

getElementsByClassName("class")--> Same class a thaka sob element niye ase, and HTMLCollection Return kore (array er moto, but puro array na) Index diye access korte hoii.... 

querySelector("selector")--> eti hocche CSS selector use kore kono element khuje ber kore, and then page a jei element ti first a pai and selector er sathe match kore takei return kore..ek kothai onek gulo element thakle oh eti shudhu first macthing element ta kei return kore...

querySelectorAll("selector")--> eti hocche CSS selector use kore page er sob  matching element select kore, otopor select er sathe jesob element macth kore, tader sobai k return kore, and eti ekti NodeList return kore, jekhane onek gulo element thake and er upor forEach() use kora jai..

tader moddhye difference dekhano holo niche...

Method	                                //Koita element Return kore//	    Ki diye khuje

getElementById	1টা	id ------->            ekti element  ------->              id 

getElementsByClassName--------->        	ekadhik	class ----->              class

querySelector	                            first matching	CSS selector-->   CSS selector

querySelectorAll ---------->                all matching------->           	CSS selector



## 2. How do you create and insert a new element into the DOM? 

Ans : Prothome createElement() method diye ekta notun element toiri korte hoi,
Tarpor oi element er vitore content (text) ba attribute jog korte hoy..
Shesh porjonto appendChild() ba onno similar method use kore element-ta ke DOM er moddhe jukto korte hoi....


## v3. What is Event Bubbling? And how does it work? 

Ans : Event Bubbling holo emon ekta process, jekhane kono child element e event ghotle sheta dhape dhape tar parent, tarpor grandparent ebong uporer dike thaka onnano element e choriye jai, shohoj bhabe bolle, event nicher element theke uporer dike uthte thake — etakei Event Bubbling bola hoi.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans  : Event Delegation holo emon ekta technique, jekhane parent element e ekta event listener boshiye tar child element gulo ke control kora hoi, Eta dorkar karon:

1. Onek element e alada alada kore event listener boshanor proyojon hoi na.

2. Performance bhalo thake, karon kom event listener use kora hoi.

3. Pore dynamically toiri kora element gulo teo event thik moto kaj kore.


5. What is the difference between preventDefault() and stopPropagation() methods?


Ans  : preventDefault() browser er default kaj bondho kore, dhoron, form submit korle page reload hoi ba link e click korle onno page e chole jay, ei default behaviour ta eta bondho kore.
stopPropagation() event bubbling bondho kore..
Mane, kono child element e event ghotle sheta ar parent ba uporer element gulo te choriye jay na..