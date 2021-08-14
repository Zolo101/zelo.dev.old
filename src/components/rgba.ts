type RGBAArray = [number, number, number, number]

class RGBA {
    color: RGBAArray;

    constructor(r: number, g: number, b: number, a: number = 1) {
        this.color = [r, g, b, a]
    }

    toString(): string {
        return `rgba(${this.color[0]},${this.color[1]},${this.color[2]},${this.color[3]})`;
    }

    brightness(amount: number): RGBA {
        const changedRGBA = this.color.map(c => Math.min(Math.max(0, c + amount), 255)) as RGBAArray;
        changedRGBA[3] = this.color[3];
        return new RGBA(...changedRGBA);
    }
}

export default RGBA;