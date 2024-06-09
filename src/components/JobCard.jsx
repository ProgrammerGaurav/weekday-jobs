import React from "react";

const JobCard = ({ job }) => {
	return (
		<div className="job-card d-flex">
			<div>
				<div className="d-flex">
					<div className="logo">
						<img src={job.logoUrl} alt="" className="logo" />
					</div>
					<div className="title">
						<div className="name">{job.companyName}</div>
						<div className="role">{job.jobRole}</div>
						<div className="location">{job.location}</div>
					</div>
				</div>
				{job.minJdSalary || job.maxJdSalary ? (
					<div className="salary">
						Estimated Salary: {job.minJdSalary ? `${job.minJdSalary} - ` : ""} {job.maxJdSalary}{" "}
						{job.salaryCurrencyCode}
					</div>
				) : (
					""
				)}
				<div className="about">
					<div>About Company</div>
					<p>{job.jobDetailsFromCompany}</p>
				</div>
				{job.minExp ? (
					<div className="experience">
						<div>Minimum Experience</div>
						<p>{job.minExp} years</p>
					</div>
				) : (
					""
				)}
			</div>

			<div className="job-card-buttons">
				<div className="appy-btn">Easy Apply</div>
				<div className="not-interested-btn">Not Interesetd</div>
			</div>
		</div>
	);
};

export default JobCard;
