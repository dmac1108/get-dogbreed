'use strict';

function watchForm(){
    console.log("watchForm function started");
    //call function retrieve the breed value
    $('form').submit(function(){
        let breed = $('input').val();
        getBreedRequest(breed);
        event.preventDefault();
    });
}

function getBreedRequest(breed){
    clearPreviousResults();
    console.log("fetch dog breed");
    let fetchUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
    fetch(fetchUrl)
    .then(response => { 
        if (response.status == 200){
        return response.json(); }
    }
    )
    .then(responseJson => displayBreedImage(responseJson.message))
    .catch(error => {
        console.log(error);
        let messageToDisplay = "<p>Breed not found. Please try again<p>";
        $('.js-images').append(messageToDisplay);
    }
    );
}

function displayBreedImage(response){
  console.log(response);
  
  let imageToDisplay = response;
  console.log(imageToDisplay);
  let imgTag = '<img src="' + imageToDisplay + '">';
  console.log(imgTag);
  $('.js-images').append(imgTag);
  
}

function clearPreviousResults(){
    console.log('in the clear image function');
    $('img').remove();
    $('p').remove();

}


$(function(){
watchForm();
console.log("app started");

});