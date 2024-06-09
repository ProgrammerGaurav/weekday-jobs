import React from "react";
import JobCard from "./JobCard";
import InfiniteScroll from "react-infinite-scroll-component";
const JobListings = ({ setFilters, filters, jobsCount, jobs }) => {
	const fetchData = () => {
		setTimeout(() => {
			setFilters({ ...filters, offset: filters.offset + 1 });
		}, 1500);
	};

	return (
		<InfiniteScroll
			dataLength={jobs.length}
			next={fetchData}
			hasMore={jobsCount > jobs.length}
			loader={
				<div className="loading">
					<img src="https://i.gifer.com/ZKZg.gif" alt="" />
				</div>
			}
		>
			<div className="job-listings">
				{jobs.map((job, index) => (
					<JobCard job={job} key={index} />
				))}
			</div>
		</InfiniteScroll>
	);
};

export default JobListings;
