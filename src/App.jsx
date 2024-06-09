import "./styles/main.scss";
import initialJobs from "./jobs";
import Filters from "./components/Filters";
import JobsListing from "./components/JobsListing";
import { useEffect, useRef, useState } from "react";

const initialFilter = {
	minExperience: "",
	companyName: "",
	location: "",
	role: "",
	minSalary: "",
	limit: 10,
	offset: 0,
};
function App() {
	const [jobs, setJobs] = useState([]);
	const [jobsCount, setJobsCount] = useState(0);
	const [filters, setFilters] = useState(initialFilter);

	useEffect(() => {
		const newJobs = initialJobs.filter((job) => {
			if (
				(parseInt(filters.minExperience) &&
					parseInt(job.minExp) &&
					!(parseInt(job.minExp) >= parseInt(filters.minExperience))) ||
				(parseInt(filters.minSalary) &&
					parseInt(job.minJdSalary) &&
					!(parseInt(job.minJdSalary) >= parseInt(filters.minSalary))) ||
				(filters.companyName && !job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) ||
				(filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) ||
				(filters.role && !job.jobRole.toLowerCase().includes(filters.role.toLowerCase()))
			) {
				return false;
			}

			return true;
		});
		setJobsCount(newJobs.length);
		setJobs(newJobs.slice(0, (filters.offset + 1) * filters.limit));
	}, [filters]);

	return (
		<div className="App">
			<Filters initialJobs={initialJobs} filters={filters} setFilters={setFilters} />
			<JobsListing setFilters={setFilters} filters={filters} jobsCount={jobsCount} jobs={jobs} />
		</div>
	);
}

export default App;
