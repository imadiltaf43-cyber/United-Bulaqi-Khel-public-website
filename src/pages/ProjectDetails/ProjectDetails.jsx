// ProjectDetails.jsx
import { useEffect,useState } from "react";
import { useParams,Link } from "react-router-dom";
import { FaIndustry,FaMapMarkerAlt,FaChartArea,FaCalendarAlt,FaMapMarkedAlt,FaArrowLeft } from "react-icons/fa";
import MainLayout from "../../layouts/MainLayout";
import { getProject } from "../../services/projectService";
import { getImageUrl } from "../../utils/getImageUrl";
import "./ProjectDetails.css";

export default function ProjectDetails(){
const {id}=useParams();
const [project,setProject]=useState(null);
const [loading,setLoading]=useState(true);
const [selectedImage,setSelectedImage]=useState("");
useEffect(() => {

    const fetchProject = async () => {

        try {

            const data = await getProject(id);

            const projectData = data.project || data;

            setProject(projectData);

            if (projectData.gallery?.length > 0) {
                setSelectedImage(projectData.gallery[0]);
            }

        }

        catch (err) {

            console.error(err);

        }

        finally {

            setLoading(false);

        }

    };

    fetchProject();

}, [id]);
if(loading)
    return 
    <MainLayout>
        <div className='loading'>
            Loading Project...
            
            </div></MainLayout>;
if(!project)
    
    return 
    <MainLayout>
        <div className='loading'>Project Not Found</div>
        
        </MainLayout>;
const hero=project.gallery?.length?getImageUrl(project.gallery[0]):"/images/projects-banner.jpg";
return(
<MainLayout>

<section className="project-banner" style={{backgroundImage:`url(${hero})`}}>
    <div className="overlay"><div className="container"><span>Home / Projects / {project.projectName}
        </span>
        <h1>{project.projectName}</h1>
        </div>
        
        </div>
        </section>
<section className="project-details">
    <div className="container details-grid">
        <div className="left">
            <img src={getImageUrl(selectedImage||project.gallery?.[0])} alt={project.projectName}/>
            </div>
            <div className="right">
                <h2>{project.projectName}</h2>
                <p>{project.description}</p>
                <div className="project-info-grid">
                    <div>
                        <FaIndustry/>
                        <h4>Category</h4>
                        <span>{project.category}

                        </span>
                        </div>
                        <div>
                            <FaMapMarkerAlt/><h4>Location</h4><span>{project.location}</span></div><div><FaChartArea/><h4>Area</h4><span>{project.area}</span></div><div><FaIndustry/><h4>Annual Output</h4><span>{project.annualOutput}</span></div><div><FaCalendarAlt/><h4>Timeline</h4><span>{project.timeline}</span></div><div><FaMapMarkedAlt/><h4>Coordinates</h4><span>{project.coordinates}</span></div></div><div className="status">Status: <span>{project.status}</span></div><Link className="back-btn" to="/projects"><FaArrowLeft/> Back to Projects</Link></div></div></section>
{project.gallery?.length>0&&<section className="project-gallery"><div className="container"><h2>Project Gallery</h2><div className="gallery-preview"><img className="preview-image" src={getImageUrl(selectedImage)} alt="Selected"/></div><div className="gallery-thumbnails">{project.gallery.map((img,i)=><img key={i} src={getImageUrl(img)} alt="" className={selectedImage===img?"thumb active":"thumb"} onClick={()=>setSelectedImage(img)}/>)}</div></div></section>}
</MainLayout>);
}
