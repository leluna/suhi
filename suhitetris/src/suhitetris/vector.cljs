(ns suhitetris.vector)


(defn scalar* [v1 v2]
  (apply + (mapv * v1 v2)))

(defn vec+ [v1 v2]
  (mapv + v1 v2))

(defn- matrix* [m v]
  "Multiplies a matrix with a vector. The matrix is a list of lists. The dimensions of matrix and vector must match.
   In particular, the vector to multiply with must have the same element count as the inner lists of the matrix."
  (mapv #(scalar* % v) m))

(def left [[0 -1]
           [1  0]])

(def right [[ 0 1]
            [-1 0]])

(defn rotate [direction v]
  (matrix* direction v))

(defn rotl [v]
  (rotate left v))

(defn rotr [v]
  (rotate right v))

(rotate right [1 0])
(vec+ [2 4] [3 5])
