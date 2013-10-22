url-query-helper
================

A javascript object that helps get, set, and remove parameters from a url

Dependens on Underscore.js http://underscorejs.org/

Example
=======
```
  var urlQueryHelper = new UrlQueryHelper("http://www.example.com/?name=Todd&location=Beach&activity=Surfing");
  urlQueryHelper.getParam("location") // returns "Beach"

  urlQueryHelper.setParam("location", "city");
  urlQueryHelper.getUrl() // returns "http://www.example.com/?name=Todd&location=city&activity=Surfing"

  urlQueryHelper.setParams({"location": "home", "activity": "reading"});
  urlQueryHelper.getUrl() // returns "http://www.example.com/?name=Todd&location=home&activity=reading"

  urlQueryHelper.removeParam("location");
  urlQueryHelper.getUrl() // returns "http://www.example.com/?name=Todd&activity=reading"

  urlQueryHelper.removeParams("name", "activity", "location", "any", "number", "of", "things");
  urlQueryHelper.getUrl() // returns "http://www.example.com/"


  // You may also set new params inline
  var urlQueryHelper = new UrlQueryHelper("http://www.example.com/?name=Todd", {name: "Ted", location: "beach"});
  urlQueryHelper.getUrl() // returns "http://www.example.com/?name=Ted&location=beach"
```

Reference (Generated with jsdox)
===============================

UrlQueryHelper(url, updatedParams)
----------------------------------
Creates an instance of UrlQueryHelper



**Parameters**

**url**:  *string*,  The url that we will be parseing

**updatedParams**:  *object*,  An optional object of new or updated parameters that will modify the url

init(url, updatedParams)
------------------------
The initializing script that gets all of the params from the url query string



**Parameters**

**url**:  *string*,  The url that we will be parseing

**updatedParams**:  *object*,  An optional object of new or updated parameters that will modify the url

getUrl()
--------
Builds and returns a url with the current params for this instance



**Returns**

*string*,  The url

getParams()
-----------
Returns the params object which shows the current state of params for this instance



**Returns**

*object*,  All of the params for this helper

getParam()
----------
Return s a single param from this instance



**Returns**

*string*,  The value of the requested param

setParam(param, value)
----------------------
Update or add a param to this instance



**Parameters**

**param**:  *string*,  The name of the parameter to add

**value**:  *string*,  The desired value for the given parameter

setParams(paramsHash)
---------------------
Update or add multiple parameters at once



**Parameters**

**paramsHash**:  *object*,  An object with all of the paremters to update or add

removeParam(param)
------------------
Remove a parameter from this instance



**Parameters**

**param**:  *string*,  the name of the parameter to remove

removeParams(Arguments)
-----------------------
Remove a list of paremters from this instance



**Parameters**

**Arguments**:  *...string*,  as a list of param names to remove from this instance

toString()
----------
Create a String representation of the UrlQueryHelper



**Returns**

*string*,  Human-readable representation of UrlQuerHelper

