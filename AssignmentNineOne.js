function count () {
    for (i=99;i>=1;i=i-1) {
        document.getElementById ("main").innerHTML+= +i+ " bottles of beer on the wall, ";
        document.getElementById ("main").innerHTML+= +i+ " bottles of beer <br /> Take one down and pass it around";
        document.getElementById ("main").innerHTML+= +i-1+ " bottles of beer on the wall <br />";
        
    }
    document.getElementById ("main").innerHTML+= " No more bottles of beer on the wall No more bottles of beer on the wall, no more bottles of beer <br /> Go to the store and buy some more, 99 bottles of beer on the wall <br />";
}
count ()