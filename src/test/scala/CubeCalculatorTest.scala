import org.scalatest.funsuite.AnyFunSuite

class CubeCalculatorTest extends AnyFunSuite {
  test("CubeCalculator.cube") {
    assert(CubeCalculator.cube(3) === 27)
  }
}

//[6,2,7,2,3,4,8,2,9,0,10,10,10,6,3,4,6,10]
// [8,17,24,43,52,82,108,127,136,156]