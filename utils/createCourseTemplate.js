export default function createCourseTemplate(
  imageSrc,
  courseName,
  courseOrganization,
  courseDuration,
  courseTopics
) {
  return `
        <div class="main__content-wrapper">
          <img class="main__course-image" src=${imageSrc}></img>
          <div class="main__info-wrapper">
            <div class="main__course-info">
              <p class="main__course-text course-name">${courseName}</p>
              <p class="main__course-text course-organization">${courseOrganization}</p>
              <p class="main__course-text course-duration">${courseDuration}</p>
            </div>
            <div class="main__course-topics">
              <p class="main__course-topics-text">${courseTopics}</p>
            </div>
          </div>
        </div>
      `;
}
