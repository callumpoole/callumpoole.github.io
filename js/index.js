
const ListRendering = {
    data() {
      return {
        skills: [
          { img: 'images/Skills/UE4.png', value: 0.60 },
          { img: 'images/Skills/Unity.png', value: 0.70 },
          { img: 'images/Skills/CPP.png', value: 0.60 },
          { img: 'images/Skills/CSharp.png', value: 0.60 },
          { img: 'images/Skills/Git.png', value: 0.50 },
          { img: 'images/Skills/SVN.png', value: 0.40 },
          { img: 'images/Skills/opengl.png', value: 0.30 },
          { img: 'images/Skills/visualStudio.png', value: 0.50 },
          { img: 'images/Skills/html_css.png', value: 0.30 },
          { img: 'images/Skills/js_alt.png', value: 0.20 },
          { img: 'images/Skills/blender.png', value: 0.20 },
          { img: 'images/Skills/photoshop.png', value: 0.50 },
          { img: 'images/Skills/excel.png', value: 0.60 },
          { img: 'images/Skills/RegEx.png', value: 0.40 }
        ]
      }
    }
  };

 Vue.createApp(ListRendering).mount('#allSkillContainers');
