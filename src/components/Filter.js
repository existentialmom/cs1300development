import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, filterProducts2, sortProducts } from "../actions/productActions";
class Filter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4">{`${this.props.filteredProducts.length} products found.`}</div>
        <div className="col-md-4">
          <label>
            Order by
            <select
              className="form-control"
              value={this.props.sort}
              onChange={(event) => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest price</option>
              <option value="highestprice">Highest to lowest price</option>
            </select>
          </label>
        </div>


          

        <div className="col-md-4">
          <label>
            {" "}
            Filter By Season
            <select
              className="form-control"
              value={this.props.availableSeason}
              onChange={(event) => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="spring">spring</option>
              <option value="summer">summer</option>
              <option value="fall">fall</option>
              <option value="winter">winter</option>
            </select>
          </label>
        </div>


      <div className="col-md-4">
          <label>
            {" "}
            Filter By Flavor
            <select
              className="form-control"
              value={this.props.flavor}
              onChange={(event) => {
                this.props.filterProducts2(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value="">ALL</option>
              <option value="">sweet</option>
              <option value="spring">sour</option>
              <option value="summer">neither</option>
            </select>
          </label>
        </div>


      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  filteredProducts2: state.products.filteredItems,
  season: state.products.availableSeason,
  flavor: state.products.flavor,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { filterProducts, filterProducts2, sortProducts })(
  Filter
);
