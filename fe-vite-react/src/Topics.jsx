
// const Topics =({active, setActive, setTopic}) => {
//     const topicNames = [
//         {name: "coding"},
//         {name: "cooking"},
//         {name: "football"},
//     ]

//     function onClick(name) {
//         setActive(name)
//         setTopic(name)
//     }

//     return (
//         <nav className="topics">
//             <ul>
//                 {topicNames.map((topic) => (
//                     <li key={topic.name} 
//                     className={active === topic.name ? "active" : "not-active"}
//                     onClick={() => onClick(topic.name)}
//                     >
//                         {topic.name}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )

// }

// export default Topics;