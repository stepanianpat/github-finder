class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  // Show profile in ui
  showProfile(user) {
    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img class="img-fluid mb-2" src="${user.avatar_url}">
                <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gists: ${user.gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-info">Following : ${user.following}</span>
                    <br>
                    <br>
                    <ul class="list-group-item"> 
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item"> Website/Blog: ${user.blog}</li>
                        <li class="list-group-item"> Location: ${user.location}</li>
                        <li class="list-group-item"> Member Since: ${user.created_at}</li>
                    </ul>

                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }
  showRepos(repos) {
    let output = '';
    repos.forEach(function(repo) {
      output += `
        <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                   <a href="${repo.html_url}" target="_blank"> ${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class="badge badge-success">Fork: ${repo.forks_count}</span>
                </div>
            </div>
        </div>
        `;
    });
    // Output
    document.getElementById('repos').innerHTML = output;
  }
  //Show alert message
  showAlert(message, className) {
    // Clear Any remaining alerts
    this.clearAlert();
    // Create Div
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.searchContainer');
    // Get Search box
    const search = document.querySelector('.search');
    //Inser talert
    container.insertBefore(div, search);

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear Alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  //Clear profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
