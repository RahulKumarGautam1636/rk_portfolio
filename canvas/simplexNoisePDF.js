/*
Based on this Simplex Noise explanation http://staffwww.itn.liu.se/~stegu/simplexnoise/simplexnoise.pdf 
Note: Example code is written in Java.
*/

var SimplexNoise;

SimplexNoise = function() {
  var dot2d, dot3d, dot4d, grad3, grad4, i, p, perm, simplex;
  grad3 = [[1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0], [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1], [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]];
  grad4 = [[0, 1, 1, 1], [0, 1, 1, -1], [0, 1, -1, 1], [0, 1, -1, -1], [0, -1, 1, 1], [0, -1, 1, -1], [0, -1, -1, 1], [0, -1, -1, -1], [1, 0, 1, 1], [1, 0, 1, -1], [1, 0, -1, 1], [1, 0, -1, -1], [-1, 0, 1, 1], [-1, 0, 1, -1], [-1, 0, -1, 1], [-1, 0, -1, -1], [1, 1, 0, 1], [1, 1, 0, -1], [1, -1, 0, 1], [1, -1, 0, -1], [-1, 1, 0, 1], [-1, 1, 0, -1], [-1, -1, 0, 1], [-1, -1, 0, -1], [1, 1, 1, 0], [1, 1, -1, 0], [1, -1, 1, 0], [1, -1, -1, 0], [-1, 1, 1, 0], [-1, 1, -1, 0], [-1, -1, 1, 0], [-1, -1, -1, 0]];
  p = [51, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
  perm = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 0; _i < 512; i = ++_i) {
      _results.push(p[i & 255]);
    }
    return _results;
  })();
  simplex = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 0, 0, 0], [0, 2, 3, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 3, 0], [0, 2, 1, 3], [0, 0, 0, 0], [0, 3, 1, 2], [0, 3, 2, 1], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 3, 2, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [1, 2, 0, 3], [0, 0, 0, 0], [1, 3, 0, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 3, 0, 1], [2, 3, 1, 0], [1, 0, 2, 3], [1, 0, 3, 2], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 3, 1], [0, 0, 0, 0], [2, 1, 3, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [2, 0, 1, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 0, 1, 2], [3, 0, 2, 1], [0, 0, 0, 0], [3, 1, 2, 0], [2, 1, 0, 3], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [3, 1, 0, 2], [0, 0, 0, 0], [3, 2, 0, 1], [3, 2, 1, 0]];
  dot2d = function(g, x, y) {
    return g[0] * x + g[1] * y;
  };
  dot3d = function(g, x, y, z) {
    return g[0] * x + g[1] * y + g[2] * z;
  };
  dot4d = function(g, x, y, z, w) {
    return g[0] * x + g[1] * y + g[2] * z + g[3] * w;
  };
  return {
    noise: function() {
      switch (arguments.length) {
        case 2:
          return this.noise2d(arguments[0], arguments[1]);
        case 3:
          return this.noise3d(arguments[0], arguments[1], arguments[2]);
        case 4:
          return this.noise4d(arguments[0], arguments[1], arguments[2], arguments[3]);
      }
    },  
    noise2d: function(xin, yin) {
      var F2, G2, X0, Y0, gi0, gi1, gi2, i1, ii, j, j1, jj, n0, n1, n2, s, t, t0, t1, t2, x0, x1, x2, y0, y1, y2;
      F2 = 0.5 * (Math.sqrt(3) - 1);
      s = (xin + yin) * F2;
      i = (xin + s) | 0;
      j = (yin + s) | 0;
      G2 = (3 - Math.sqrt(3)) / 6;
      t = (i + j) * G2;
      X0 = i - t;
      Y0 = j - t;
      x0 = xin - X0;
      y0 = yin - Y0;
      if (x0 > y0) {
        i1 = 1;
        j1 = 0;
      } else {
        i1 = 0;
        j1 = 1;
      }
      x1 = x0 - i1 + G2;
      y1 = y0 - j1 + G2;
      x2 = x0 - 1 + 2 * G2;
      y2 = y0 - 1 + 2 * G2;
      ii = i & 255;
      jj = j & 255;
      gi0 = perm[ii + perm[jj]] % 12;
      gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
      gi2 = perm[ii + 1 + perm[jj + 1]] % 12;
      t0 = 0.5 - x0 * x0 - y0 * y0;
      if (t0 < 0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * dot2d(grad3[gi0], x0, y0);
      }
      t1 = 0.5 - x1 * x1 - y1 * y1;
      if (t1 < 0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * dot2d(grad3[gi1], x1, y1);
      }
      t2 = 0.5 - x2 * x2 - y2 * y2;
      if (t2 < 0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * dot2d(grad3[gi2], x2, y2);
      }
      return 70 * (n0 + n1 + n2);
    },
    noise3d: function(xin, yin, zin) {
      var F3, G3, X0, Y0, Z0, gi0, gi1, gi2, gi3, i1, i2, ii, j, j1, j2, jj, k, k1, k2, kk, n0, n1, n2, n3, s, t, t0, t1, t2, t3, x0, x1, x2, x3, y0, y1, y2, y3, z0, z1, z2, z3;
      F3 = 1 / 3;
      s = (xin + yin + zin) * F3;
      i = (xin + s) | 0;
      j = (yin + s) | 0;
      k = (zin + s) | 0;
      G3 = 1 / 6;
      t = (i + j + k) * G3;
      X0 = i - t;
      Y0 = j - t;
      Z0 = k - t;
      x0 = xin - X0;
      y0 = yin - Y0;
      z0 = zin - Z0;
      if (x0 >= y0) {
        if (y0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        } else if (x0 >= z0) {
          i1 = 1;
          j1 = 0;
          k1 = 0;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        } else {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 1;
          j2 = 0;
          k2 = 1;
        }
      } else {
        if (y0 < z0) {
          i1 = 0;
          j1 = 0;
          k1 = 1;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } else if (x0 < z0) {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 0;
          j2 = 1;
          k2 = 1;
        } else {
          i1 = 0;
          j1 = 1;
          k1 = 0;
          i2 = 1;
          j2 = 1;
          k2 = 0;
        }
      }
      x1 = x0 - i1 + G3;
      y1 = y0 - j1 + G3;
      z1 = z0 - k1 + G3;
      x2 = x0 - i2 + 2 * G3;
      y2 = y0 - j2 + 2 * G3;
      z2 = z0 - k2 + 2 * G3;
      x3 = x0 - 1 + 3 * G3;
      y3 = y0 - 1 + 3 * G3;
      z3 = z0 - 1 + 3 * G3;
      ii = i & 255;
      jj = j & 255;
      kk = k & 255;
      gi0 = perm[ii + perm[jj + perm[kk]]] % 12;
      gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1]]] % 12;
      gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2]]] % 12;
      gi3 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1]]] % 12;
      t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
      if (t0 < 0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * dot3d(grad3[gi0], x0, y0, z0);
      }
      t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
      if (t1 < 0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * dot3d(grad3[gi1], x1, y1, z1);
      }
      t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
      if (t2 < 0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * dot3d(grad3[gi2], x2, y2, z2);
      }
      t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
      if (t3 < 0) {
        n3 = 0;
      } else {
        t3 *= t3;
        n3 = t3 * t3 * dot3d(grad3[gi3], x3, y3, z3);
      }
      return 32 * (n0 + n1 + n2 + n3);
    },
    noise4d: function(x, y, z, w) {
      var F4, G4, W0, X0, Y0, Z0, c, c1, c2, c3, c4, c5, c6, gi0, gi1, gi2, gi3, gi4, i1, i2, i3, ii, j, j1, j2, j3, jj, k, k1, k2, k3, kk, l, l1, l2, l3, ll, n0, n1, n2, n3, n4, s, t, t0, t1, t2, t3, t4, w0, w1, w2, w3, w4, x0, x1, x2, x3, x4, y0, y1, y2, y3, y4, z0, z1, z2, z3, z4;
      F4 = (Math.sqrt(5) - 1) / 4;
      G4 = (5 - Math.sqrt(5)) / 20;
      s = (x + y + z + w) * F4;
      i = (x + s) | 0;
      j = (y + s) | 0;
      k = (z + s) | 0;
      l = (w + s) | 0;
      t = (i + j + k + l) * G4;
      X0 = i - t;
      Y0 = j - t;
      Z0 = k - t;
      W0 = l - t;
      x0 = x - X0;
      y0 = y - Y0;
      z0 = z - Z0;
      w0 = w - W0;
      c1 = (x0 > y0 ? 32 : 0);
      c2 = (x0 > z0 ? 16 : 0);
      c3 = (y0 > z0 ? 8 : 0);
      c4 = (x0 > w0 ? 4 : 0);
      c5 = (y0 > w0 ? 2 : 0);
      c6 = (z0 > w0 ? 1 : 0);
      c = c1 + c2 + c3 + c4 + c5 + c6;
      i1 = (simplex[c][0] >= 3 ? 1 : 0);
      j1 = (simplex[c][1] >= 3 ? 1 : 0);
      k1 = (simplex[c][2] >= 3 ? 1 : 0);
      l1 = (simplex[c][3] >= 3 ? 1 : 0);
      i2 = (simplex[c][0] >= 2 ? 1 : 0);
      j2 = (simplex[c][1] >= 2 ? 1 : 0);
      k2 = (simplex[c][2] >= 2 ? 1 : 0);
      l2 = (simplex[c][3] >= 2 ? 1 : 0);
      i3 = (simplex[c][0] >= 1 ? 1 : 0);
      j3 = (simplex[c][1] >= 1 ? 1 : 0);
      k3 = (simplex[c][2] >= 1 ? 1 : 0);
      l3 = (simplex[c][3] >= 1 ? 1 : 0);
      x1 = x0 - i1 + G4;
      y1 = y0 - j1 + G4;
      z1 = z0 - k1 + G4;
      w1 = w0 - l1 + G4;
      x2 = x0 - i2 + 2 * G4;
      y2 = y0 - j2 + 2 * G4;
      z2 = z0 - k2 + 2 * G4;
      w2 = w0 - l2 + 2 * G4;
      x3 = x0 - i3 + 3 * G4;
      y3 = y0 - j3 + 3 * G4;
      z3 = z0 - k3 + 3 * G4;
      w3 = w0 - l3 + 3 * G4;
      x4 = x0 - 1 + 4 * G4;
      y4 = y0 - 1 + 4 * G4;
      z4 = z0 - 1 + 4 * G4;
      w4 = w0 - 1 + 4 * G4;
      ii = i & 255;
      jj = j & 255;
      kk = k & 255;
      ll = l & 255;
      gi0 = perm[ii + perm[jj + perm[kk + perm[ll]]]] % 32;
      gi1 = perm[ii + i1 + perm[jj + j1 + perm[kk + k1 + perm[ll + l1]]]] % 32;
      gi2 = perm[ii + i2 + perm[jj + j2 + perm[kk + k2 + perm[ll + l2]]]] % 32;
      gi3 = perm[ii + i3 + perm[jj + j3 + perm[kk + k3 + perm[ll + l3]]]] % 32;
      gi4 = perm[ii + 1 + perm[jj + 1 + perm[kk + 1 + perm[ll + 1]]]] % 32;
      t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0 - w0 * w0;
      if (t0 < 0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * dot4d(grad4[gi0], x0, y0, z0, w0);
      }
      t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1 - w1 * w1;
      if (t1 < 0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * dot4d(grad4[gi1], x1, y1, z1, w1);
      }
      t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2 - w2 * w2;
      if (t2 < 0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * dot4d(grad4[gi2], x2, y2, z2, w2);
      }
      t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3 - w3 * w3;
      if (t3 < 0) {
        n3 = 0;
      } else {
        t3 *= t3;
        n3 = t3 * t3 * dot4d(grad4[gi3], x3, y3, z3, w3);
      }
      t4 = 0.6 - x4 * x4 - y4 * y4 - z4 * z4 - w4 * w4;
      if (t4 < 0) {
        n4 = 0;
      } else {
        t4 *= t4;
        n4 = t4 * t4 * dot4d(grad4[gi4], x4, y4, z4, w4);
      }
      return 27 * (n0 + n1 + n2 + n3 + n4);
    }
  };
};
   