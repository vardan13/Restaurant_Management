module.exports = mongoose => {
    const restaurantrating = mongoose.model(
      "restaurantrating",
      mongoose.Schema(
        {
          RestaurantId: String,
          CustomerId: String,
          Datetime: String,
          OrderId:String,
          Rating:String,
          Review:String,
        }
       
      )
    );
  
    return restaurantrating;
  };