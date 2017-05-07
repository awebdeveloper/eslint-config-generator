/* exported MyOncogene */

/**
 * This is extention of oncogene
 *
 * @class MyOncogene
 * @extends {Oncogene}
 */
class MyOncogene extends Oncogene {
  /**
   *
   * @memberof MyOncogene
   */
  nextStep() {
    const result = document.querySelector(".result > .config");

    result.textContent = JSON.stringify(this.config, null, 4);
    super.nextStep();
  }

  /**
   *
   * @memberof MyOncogene
   */
  getResult() {
    document.querySelector(".oncogene").remove();
  }
}
