import React from 'react';
import './Template.css';
const templateImages = [
  { 
    url: 'https://tse1.mm.bing.net/th?id=OIP.HaZhdLP1VvMRXXbNXwp6JQHaES&pid=Api&P=0&h=180', 
    description: 'KL University (KLU), also known as Koneru Lakshmaiah Education Foundation (KLEF), is a private university located in Vaddeswaram, Guntur, Andhra Pradesh, India. It is named after its founder, Koneru Lakshmaiah, a prominent industrialist, and philanthropist.Here are some key details about KL University:Establishment:Founded in 1980 as Koneru Lakshmaiah College of Engineering (KLCE) and was granted university status in 2009 by the University Grants Commission (UGC).Academic Programs:KLU offers a variety of undergraduate, postgraduate, and doctoral programs in fields such as engineering, management, science, law, and architecture.Some of the popular courses include B.Tech, M.Tech, MBA, Ph.D., and other specialized programs.' 
  },
  { 
    url: 'https://assets.thehansindia.com/h-upload/feeds/2019/06/07/183142-kl-university.jpg', 
    description: 'Template 2 showcases a modern and structured design for educational institutions. It highlights key information visually. Ideal for presenting school or university details effectively.'
  },
  { 
    url: 'https://images.static-collegedunia.com/public/college_data/images/campusimage/1579070042IMG_3160.JPG', 
    description: 'Template 3 is a versatile option, perfect for displaying campus events and facilities. The layout emphasizes vibrant visuals and concise descriptions. Suitable for interactive showcases.'
  },
  { 
    url: 'https://images.static-collegedunia.com/public/college_data/images/campusimage/1517573984KLU_%20Liberary.JPG', 
    description: 'Template 4 provides an academic atmosphere, focusing on libraries and learning spaces. It’s ideal for promoting educational resources and study environments at institutions.'
  },
  { 
    url: 'https://www.dialeducation.com/assets/images/gallery/gallery_16075901051.jpg', 
    description: 'Template 5 highlights dynamic campus life and student activities. This design emphasizes an active community. Best suited for showcasing extracurriculars and student engagements.'
  },
];

const Template = () => {
  return (
    <div className="template-container">
      <h1 className="template-title">Available Templates</h1>
      <div className="template-grid">
        {templateImages.map((item, index) => (
          <div className={`template-item ${index % 2 === 0 ? 'left-right' : 'right-left'}`} key={index}>
            <img src={item.url} alt={`Template ${index + 11}`} className="template-image" />
            <div className="template-info">
              <p className="template-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Template;
