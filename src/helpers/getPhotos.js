const InstaData = require('./instaData');

module.exports = {
  getPhotos: function(formFilter) {
    if (formFilter == 'All') return InstaData;

    return InstaData.filter(function(el) {
      return el.filter == formFilter;
    });
  },

  paginatePhotos: function(filteredPhotos, page) {
    return filteredPhotos.slice(page * 12 - 12, page * 12);
  }
};
