/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';

import Basics from './basics';
import { Tuples, ExampleEnum } from './tuples';
import LiteralTypes from './literalTypes';

Basics();
Tuples();
ExampleEnum();
LiteralTypes();

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
