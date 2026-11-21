import React from 'react'
import Card from './comonents/Card'
const App = () => {
const jobs = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25–$40/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35–$55/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    name: "Amazon",
    datePosted: "1 day ago",
    post: "SDE Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20–$30/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40–$60/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45–$70/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50–$80/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "7 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$45–$75/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    name: "Adobe",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30–$45/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/ibm",
    name: "IBM",
    datePosted: "5 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$35–$50/hour",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://cdn.simpleicons.org/salesforce",
    name: "Salesforce",
    datePosted: "3 days ago",
    post: "Software Developer Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$20–$35/hour",
    location: "Mumbai, India",
  },
];
console.log(jobs)

  return (
    <div className="parent">

      {jobs.map(function(elem,idx){
        return <div key={idx}>
          <Card name={elem.name} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} datePosted={elem.datePosted} />
        </div>

      })}

    </div>
  )
}

export default App
