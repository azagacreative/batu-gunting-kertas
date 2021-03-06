class Start {
    constructor() {
        this.playerName = "KAMU"
        this.botName = "AZAGABOT"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "MATCH SERI!"
        }
    }

    matchResult() {
        if (this.winner != "MATCH SERI!") {
            return `${this.winner} MENANG!`;
        } else {
            return `${this.winner}`;
        }
    }
}

function pickOption(params) {
    const start = new Start();
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();

    const inGame = document.getElementById("inGame");
    const result = document.getElementById("result");

    inGame.textContent = "Kamu pilih: " + start.getPlayerOption;
    result.textContent = "..."

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
    }, 1500);

}