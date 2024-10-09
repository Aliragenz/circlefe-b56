import { useFetchData } from "../hooks/use-fetch-data"
import { User } from "../types/user";

export function UserList() {
    const {data: users} = useFetchData<User>({
        url: "https://jsonplaceholder.typicode.com/users",
    });
    
    return (
        <ul>
            {users.map((user, index) => {
                return (
                    <div key={index}>
                        <hr />
                    <li>Name :{user.name}</li>
                    <li>Username :{user.username}</li>
                    <li>Email :{user.email}</li>
                    {/* <li>Address :
                        <ul>
                        <li>Street :{user.address.street}</li>
                        <li>Suite :{user.address.suite}</li>
                        <li>City :{user.address.city}</li>
                        <li>Zip Code :{user.address.zipcode}</li>
                        <li>Geo : 
                            <ul>
                                <li>lat : {user.address.geo.lat}</li>
                                <li>lng : {user.address.geo.lng}</li>
                            </ul>
                        </li>
                        </ul>
                    </li> */}
                    <li>Phone Number : {user.phone}</li>
                    <li>Website : {user.website}</li>
                    {/* <li>Company : 
                        <ul>
                            <li>Name : {user.company.name}</li>
                            <li>Catch Phrase : {user.company.catchPhrase}</li>
                            <li>BS : {user.company.bs}</li>
                        </ul>
                    </li> */}
                    <hr/>
                    <br />
                    </div>
                )
            })}
        </ul>
    )
}