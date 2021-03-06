function submitExtraItem(){
  event.preventDefault();
  $.ajax({
    url : "add-item/",
    type : "POST",
    data : $("#item-form").serialize(),

    success : function(data){
      var li = document.createElement('li');
      json = data[0];
      li.innerHTML = json['fields']['description'];
      document.getElementById('extra-items').appendChild(li)},
    error : function(xhr,errmsg,err){
      console.log(xhr.status + ": " + xhr.responseText);
    }
  })
  document.getElementById('id_description').value = "";
};

function toggleRecipe(recipe){
  var li = document.getElementById('recipe'+recipe);
  if (li.parentNode.className === "list-recipes"){
    li.parentNode.removeChild(li);
    document.getElementById('list-recipes-form').appendChild(li);
  }
  else{
    li.parentNode.removeChild(li);
    document.getElementById('list-recipes').appendChild(li);
  }
}

function makeList(){
  var data = "";
  list = document.getElementById('list-recipes').children;
  for(var i = 0; i < list.length; i++){
    data += "," + list[i].id.substring(6);
  }
  document.getElementById('recipes-data').value = data;
}
