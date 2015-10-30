module.exports = function(grunt) {
  grunt.initConfig({

    compass: {
      dist: {
        options: {
          sassDir: 'src/sass', 
          cssDir: 'dist/stylesheets', 
          outputStyle: 'compact', 
          relativeAssets: true
        }  
      }
    },

    watch: {
      handlebars: {
        files: ['src/templates/*.handlebars'],
        tasks: ['shell:handlebars']
      },
      sass: {
        files: ['src/sass/*', 'src/sass/modules/*', 'src/sass/partials/*'],
        tasks: ['compass']
      }
    },

    shell: {
        options: {
            stderr: false
        },
        handlebars: {
            command: 'handlebars  ./src/templates/ -e handlebars -f dist/templates/handlebars-templates.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
};