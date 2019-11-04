/// <reference types="Cypress" />

//Import the code to be unit tested
import swapImage from '../../../public/javascripts/swap'

describe('Unit testing that image swapping elements exist and can be changed.', function(){
  context('swap.js', function(){
    //does the image element exist?
    it('Contains an image element called pocImage', function(){
      expect(image).to.eq('pocImage');
    })

    //does the dropdown control exist?
    it('Contains a dropdown control element called vaderImgSwap', function(){
      expect(dropd).to.eq('vaderImgSwap');
    })
  })

})





