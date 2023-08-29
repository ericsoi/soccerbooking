import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const GalaryImage = ()=>{
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState(false);

	return (
		<>
			<button onClick={() => setToggler(!toggler)}>
				Toggle Lightbox
			</button>
			 <FsLightbox
				toggler={toggler}
				sources={[
					'/img/IMG-20230829-WA0001.jpg',
					'/img/IMG-20230829-WA0002.jpg',
					'/img/IMG-20230829-WA0003.jpg',
                    '/img/IMG-20230829-WA0004.jpg',
				]}
			/>
		 </>
	);
}

export default GalaryImage;