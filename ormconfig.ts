import { Order } from "src/models/order.model";
import { User } from "src/models/user.models";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

const config:PostgresConnectionOptions={
    type:"postgres",
    database:"authdb",
    host:"postgres_container",  
    port:5432,
    username:"postgres",
    password:"postgres",
    entities:{User,Order},
    synchronize:true
}

export default config