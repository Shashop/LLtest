const app = new Vue({
  el: '#app',
  data: {
    lines: [],
    currentLine: {
      characterImageUrl: '',
      line: ''
    }
  },
  methods: {
    addLine() {
      this.lines.push({
        characterImageUrl: this.currentLine.characterImageUrl,
        line: this.currentLine.line,
        formattedLine: this.formatLine(this.currentLine.line)
      });
      this.currentLine.characterImageUrl = '';
      this.currentLine.line = '';
    },
    formatLine(line) {
      // ここでテキストを装飾する関数を実装します
      // 例: ひらがなのみを赤色にする
      return line.split('').map(char => {
        const code = char.charCodeAt(0);
        if (0x3040 <= code && code <= 0x309F) {
          return `<span style="color: red;">${char}</span>`;
        } else {
          return char;
        }
      }).join('');
    }
  }
});
