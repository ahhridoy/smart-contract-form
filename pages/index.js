import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SMART CONTRACT FORM</title>
        <meta name="description" content="Welcome to Smart Contract Form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="boxed-version">
        <div className="clearfix" />
        <div className="wrapper clearfix">
          <div className="multisteps-form">
            {/*form panels*/}
            <div className="row">
              <div className="col-12 col-lg-12 m-auto">
              <h3 className="wizard-part-title">Update Your Information</h3>
                <form
                  className="multisteps-form__form position-relative clearfix"
                  action="#"
                  method="post"
                  id="wizard"
                >
                  {/*single form panel*/}
                  <div
                    className="multisteps-form__panel js-active"
                    data-animation="slideVert"
                  >
                    <div
                      className="inner position-relative pb-100"
                      style={{ paddingTop: "50px" }}
                    >
                      <div className="wizard-content-form">

                        <div className="badge-selection">
                          <h3>
                            Which ERC standard ? (Choosing whichever is fine)
                          </h3>
                          <label>
                            <input
                              type="radio"
                              defaultChecked="checked"
                              name="erc"
                            />
                            <span className="checkmark">
                              ERC-721 (standard)
                            </span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="erc" />
                            <span className="checkmark">
                              ERC-721A (improved version of ERC721 costing less
                              gas fees )
                            </span>
                          </label>
                        </div>

                        <div className="badge-selection">
                          <h3>Do you want whitelisting function ?</h3>
                          <label>
                            <input type="radio" name="whitelisting" />
                            <span className="checkmark">Yes</span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="whitelisting" />
                            <span className="checkmark">No</span>
                          </label>
                        </div>

                        <div className="badge-selection">
                          <h3>Do you want reveal function ?</h3>
                          <label>
                            <input type="radio" name="reveal" />
                            <span className="checkmark">Yes</span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="reveal" />
                            <span className="checkmark">No</span>
                          </label>
                        </div>

                        <div className="badge-selection">
                          <h3>Will it be a free mint ?</h3>
                          <label>
                            <input type="radio" name="freemint" />
                            <span className="checkmark">Yes</span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="freemint" />
                            <span className="checkmark">No</span>
                          </label>
                        </div>

                        <div className="badge-selection">
                          <h3>
                            Will there be a partial free mint ? (ie only first
                            100 NFT free )
                          </h3>
                          <label>
                            <input type="radio" name="partial" />
                            <span className="checkmark">Yes</span>
                          </label>{" "}
                          <br />
                          <label>
                            <input type="radio" name="partial" />
                            <span className="checkmark">No</span>
                          </label>
                        </div>

                        <div className="wizard-form-field">
                          <div className="wizard-form-input position-relative form-group has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What will be the maximum number of  NFT per wallet?"
                            />
                            <label>
                              Will there be a partial free mint ? (ie only first
                              100 NFT free )
                            </label>
                          </div>
                        </div>

                        <div className="wizard-form-field">
                          <div className="wizard-form-input position-relative form-group has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What will be supply of free NFTs ?"
                            />
                            <label>What will be supply of free NFTs ?</label>
                          </div>
                        </div>

                        <div className="wizard-form-field">
                          <div className="wizard-form-input position-relative form-group has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What's the presale price ?"
                            />
                            <label>What's the presale price ?</label>
                          </div>
                        </div>

                        <div className="wizard-form-field">
                          <div className="wizard-form-input position-relative form-group has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What's the public sale price?"
                            />
                            <label>What's the public sale price?</label>
                          </div>
                        </div>

                        <div className="wizard-form-field">
                          <div className="wizard-form-input position-relative form-group has-float-label">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="What will be the maximum number of  NFT minted at a time ?"
                            />
                            <label>
                              What will be the maximum number of NFT minted at a
                              time ?
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="wizard-footer">
                        <div className="wizard-imgbg float-start">
                          <img src="assets/img/v5.png" alt="" />
                        </div>
                        <div className="actions">
                          <ul>
                            <li></li>
                            <li>
                              <button
                                type="submit"
                                id="submit-form"
                                title="NEXT"
                              >
                                SUMBIT
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
