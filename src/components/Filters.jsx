import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Filters = ({ initialJobs, filters, setFilters }) => {
	const roles = [],
		location = [];

	initialJobs.map((job) => {
		if (!roles.includes(job.jobRole)) {
			roles.push(job.jobRole);
		}
		if (!location.includes(job.location)) {
			location.push(job.location);
		}
	});

	return (
		<div className="filters d-flex">
			<div>
				<input
					placeholder="Min Experience"
					value={filters.minExperience}
					onChange={(e) => {
						setFilters({ ...filters, minExperience: e.target.value });
					}}
					type="number"
				/>
			</div>
			<div>
				<input
					placeholder="Company Name"
					value={filters.companyName}
					onChange={(e) => {
						setFilters({ ...filters, companyName: e.target.value });
					}}
				/>
			</div>
			<Dropdown
				options={roles}
				onChange={(data) => {
					setFilters({ ...filters, role: data.value });
				}}
				value={filters.role}
				placeholder="Select an role"
			/>
			<Dropdown
				options={location}
				onChange={(data) => {
					setFilters({ ...filters, location: data.value });
				}}
				value={filters.location}
				placeholder="Select an location"
			/>
			<div>
				<input
					placeholder="Min Salary"
					value={filters.minSalary}
					onChange={(e) => {
						setFilters({ ...filters, minSalary: e.target.value });
					}}
					type="number"
				/>
			</div>
		</div>
	);
};

export default Filters;
