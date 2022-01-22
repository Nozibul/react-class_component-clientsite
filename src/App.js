import Analysis from "./component/Analysis/Analysis";
import Course from "./component/Course/Course";
import RecentProjects from "./component/RecentProjects/RecentProjects";
// import Header from "./component/Header/Header";
import Services from "./component/Services/Services";
import Summary from "./component/Summary/Summary";
import TopBanner from "./component/TopBanner/TopBanner";

function App() {
  return (
    <div>
     
     <TopBanner />
     <Services />
     <Analysis />
     <Summary />
     <RecentProjects />
     <Course />

    </div>
  );
}

export default App;
