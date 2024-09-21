const mongoose = require("mongoose");
const connect = async () => {
  await mongoose.connect(
    `mongodb+srv://mohitratan2003:mohitratan6317@cluster0.jzlaenv.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
    }
  );
  console.log("DataBase connected");
};
export default connect;
