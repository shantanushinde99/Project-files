document.addEventListener('DOMContentLoaded', function() {
    const courses = [
      { name: 'Course 1', progress: 10 },
      { name: 'Course 2', progress: 10 },
      { name: 'Course 3', progress: 10 }
    ];
  
    const courseList = document.getElementById('courseList');
    const enrolledCourses = document.getElementById('enrolledCourses');
    const completedCourses = document.getElementById('completedCourses');
    const rank = document.getElementById('rank');
  
    courses.forEach(course => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${course.name}</span>
        <div class="progress-bar">
          <div class="progress" style="width: ${course.progress}%"></div>
        </div>
      `;
      courseList.appendChild(li);
    });
  
    enrolledCourses.textContent = courses.length;
  
    const completedCount = courses.filter(course => course.progress === 100).length;
    completedCourses.textContent = completedCount;
  
    // Example logic to determine rank based on completed courses
    if (completedCount >= 3) {
      rank.textContent = 'Expert';
    } else if (completedCount >= 2) {
      rank.textContent = 'Intermediate';
    } else if (completedCount >= 1) {
      rank.textContent = 'Beginner';
    } else {
      rank.textContent = 'No rank yet';
    }
  });
  

  document.querySelectorAll('.progress-circle').forEach(circle => {
    const progress = circle.querySelector('.progress');
    const percentage = parseInt(progress.style.width, 10);
    const text = document.createElement('div');
    text.classList.add('progress-text');
    text.textContent = percentage + '%';
    circle.appendChild(text);
  });
  