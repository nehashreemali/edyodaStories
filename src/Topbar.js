import React, { Component } from "react";

export default class Topbar extends Component {
	render() {
		return (
			<div>
				<div className="topbar">
					<div class="head">
						<h1>EDYODA</h1>
						<p>Stories</p>
					</div>
					<div className="right">
						<div>
							<p>
								Explore Categories{" "}
								<span>
									<img
										src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
										alt=""
									/>
								</span>{" "}
							</p>
						</div>
						<div className="right-flex">
							<p>
								EdYoda is free learning and knowledge <br /> sharing platform
								for techies
							</p>
							<button>Go To Main Website</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
