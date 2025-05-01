// Copyright (c) 2025 Anastasiia Lebedenko All rights reserved
//
// Created by: Anastasiia Lebedenko
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the volume of the triangle
 */
function calculateVolume() {
  // Information about values
    let length = parseFloat(document.getElementById('length').value);
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);

  // Calculation
  let volume = (1/2) * (length * base * height)

  // Display
  document.getElementById('volume').innerHTML = 'Volume of a triangular prims is: ' + volume + ' cm<sup>3<sup>'
}