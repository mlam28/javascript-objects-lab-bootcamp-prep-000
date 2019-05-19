var recipes = {healthy: "salad", meat:"steak", fish: "salmon"}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key]=value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value
  return recipes
}

function updateObjectWithKeyAndValue(object, key, value){
  return recipes.assign({}, object, {[key]:value})
  return recipes
}