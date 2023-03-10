import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Header } from "semantic-ui-react";
import List from "semantic-ui-react/dist/commonjs/elements/List";

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then((response) => {
      setActivities(response.data);
      console.log(response.data);
    });
  }, []);
  
  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'/>
       <List>
        {activities.map((activity:any) =>(
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        ))}
       </List>
    </div>
  );
}

export default App;
