// Copyright 2011 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview PseudoRandom provides a mechanism for generating deterministic
 * psuedo random numbers based on a seed. Based on the Park-Miller algorithm.
 * See http://dx.doi.org/10.1145%2F63039.63042 for details.
 *
 * This version was modified to run standalone without the Closure library.
 */

goog = {};
goog.testing = {};



/**
 * Class for unit testing code that uses Math.random. Generates deterministic
 * random numbers.
 *
 * @param {number=} opt_seed The seed to use.
 * @param {boolean=} opt_install Whether to install the PseudoRandom at
 *     construction time.
 * @extends {goog.Disposable}
 * @constructor
 */
goog.testing.PseudoRandom = function(opt_seed, opt_install) {

  if (opt_seed == null || typeof(opt_seed)==="undefined") {
    opt_seed = goog.testing.PseudoRandom.seedUniquifier_++ + new Date();
  }
  this.seed(opt_seed);

};

/**
 * Helps create a unique seed.
 * @type {number}
 * @private
 */
goog.testing.PseudoRandom.seedUniquifier_ = 0;


/**
 * Constant used as part of the algorithm.
 * @type {number}
 */
goog.testing.PseudoRandom.A = 48271;


/**
 * Constant used as part of the algorithm. 2^31 - 1.
 * @type {number}
 */
goog.testing.PseudoRandom.M = 2147483647;


/**
 * Constant used as part of the algorithm. It is equal to M / A.
 * @type {number}
 */
goog.testing.PseudoRandom.Q = 44488;


/**
 * Constant used as part of the algorithm. It is equal to M % A.
 * @type {number}
 */
goog.testing.PseudoRandom.R = 3399;


/**
 * Constant used as part of the algorithm to get values from range [0, 1).
 * @type {number}
 */
goog.testing.PseudoRandom.ONE_OVER_M_MINUS_ONE =
    1.0 / (goog.testing.PseudoRandom.M - 1);


/**
 * The seed of the random sequence and also the next returned value (before
 * normalization). Must be between 1 and M - 1 (inclusive).
 * @type {number}
 * @private
 */
goog.testing.PseudoRandom.prototype.seed_ = 1;


/**
 * Whether this PseudoRandom has been installed.
 * @type {boolean}
 * @private
 */
goog.testing.PseudoRandom.prototype.installed_;


/**
 * The original Math.random function.
 * @type {function(): number}
 * @private
 */
goog.testing.PseudoRandom.prototype.mathRandom_;


/**
 * Installs this PseudoRandom as the system number generator.
 */
goog.testing.PseudoRandom.prototype.install = function() {
    alert("PseudoRandom tried to install itself. FAIL");
};



/**
 * Seed the generator.
 *
 * @param {number=} seed The seed to use.
 */
goog.testing.PseudoRandom.prototype.seed = function(seed) {
  this.seed_ = seed % (goog.testing.PseudoRandom.M - 1);
  if (this.seed_ <= 0) {
    this.seed_ += goog.testing.PseudoRandom.M - 1;
  }
};


/**
 * @return {number} The next number in the sequence.
 */
goog.testing.PseudoRandom.prototype.random = function() {
  var hi = Math.floor(this.seed_ / goog.testing.PseudoRandom.Q);
  var lo = this.seed_ % goog.testing.PseudoRandom.Q;
  var test = goog.testing.PseudoRandom.A * lo -
             goog.testing.PseudoRandom.R * hi;
  if (test > 0) {
    this.seed_ = test;
  } else {
    this.seed_ = test + goog.testing.PseudoRandom.M;
  }
  return (this.seed_ - 1) * goog.testing.PseudoRandom.ONE_OVER_M_MINUS_ONE;
};



PseudoRandom = goog.testing.PseudoRandom;
