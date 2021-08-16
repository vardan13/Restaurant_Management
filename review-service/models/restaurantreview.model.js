module.exports = mongoose => {
    const restaurantreview = mongoose.model(
      "restaurantreview",
      mongoose.Schema(
        {
          Name: String,
          Phone: String,
          Location: {lat:String,lon:String},
          Address: {City:String,state:String},
          Cuisine:String,
          Budget:{Rupees:String},
          Menus:{items:{id:String,name:String}}
        }
        ,
      { timestamps: true }
      )
    );
  
    return restaurantreview;
  };