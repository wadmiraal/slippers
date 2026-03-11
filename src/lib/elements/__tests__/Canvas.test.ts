import { Canvas, clear, drawCircle, drawLine, fillCircle, fillRect, moveTo } from "../Canvas";

const originalDocumentCreateElement = document.createElement;
const setAttribute = jest.fn().mockImplementation((name: string, value: string) => {
  if (name === "width") mockEl.width = parseInt(value);
  if (name === "height") mockEl.height = parseInt(value);
});
const ctxMock = {
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  stroke: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  fillRect: jest.fn(),
  clearRect: jest.fn(),
  strokeStyle: "",
  fillStyle: "",
};
const mockEl: {
  getContext: () => typeof ctxMock;
  setAttribute: typeof setAttribute;
  style: Record<string, string>;
  width: number;
  height: number;
} = {
  getContext: () => ctxMock,
  setAttribute,
  style: {},
  width: 0,
  height: 0,
};

beforeAll(() => {
  Object.defineProperty(document, "createElement", {
    configurable: true,
    value: () => mockEl,
  });
});

afterAll(() => {
  Object.defineProperty(document, "createElement", {
    value: originalDocumentCreateElement,
  });
});

beforeEach(() => {
  jest.clearAllMocks();
  mockEl.width = 0;
  mockEl.height = 0;
});

it("should work with moveTo, drawLine, drawCircle", () => {
  const canvas = new Canvas(
    { lineWidth: 2, color: "green", width: 100, height: 200 },
    moveTo(10, 10),
    drawLine(20, 20),
    drawCircle(40, 40, 50)
  );
  expect(canvas.lineWidth).toBe(2);
  expect(canvas.color).toBe("green");

  // moveTo();
  expect(ctxMock.moveTo).toHaveBeenCalledWith(10, 10);

  // drawLine();
  expect(ctxMock.lineTo).toHaveBeenCalledWith(20, 20);
  expect(ctxMock.stroke).toHaveBeenCalled();

  // drawCircle()
  expect(ctxMock.beginPath).toHaveBeenCalled();
  expect(ctxMock.moveTo).toHaveBeenCalledWith(90, 40);
  expect(ctxMock.arc).toHaveBeenCalledWith(40, 40, 50, 0, 2 * Math.PI);
  expect(ctxMock.stroke).toHaveBeenCalledTimes(2);
});

it("should fillCircle", () => {
  const canvas = new Canvas({ width: 100, height: 100 });
  canvas.add(fillCircle(40, 40, 20));

  expect(ctxMock.beginPath).toHaveBeenCalled();
  expect(ctxMock.arc).toHaveBeenCalledWith(40, 40, 20, 0, 2 * Math.PI);
  expect(ctxMock.fill).toHaveBeenCalled();
});

it("should fillRect", () => {
  const canvas = new Canvas({ width: 100, height: 100 });
  canvas.add(fillRect(10, 20, 50, 30));

  expect(ctxMock.fillRect).toHaveBeenCalledWith(10, 20, 50, 30);
});

it("should clear the canvas", () => {
  const canvas = new Canvas({ width: 100, height: 200 });
  canvas.add(clear());

  expect(ctxMock.clearRect).toHaveBeenCalledWith(0, 0, 100, 200);
});

it("should set fillStyle when color is set", () => {
  const canvas = new Canvas({ width: 100, height: 100 });
  canvas.color = "red";

  expect(ctxMock.fillStyle).toBe("red");
  expect(ctxMock.strokeStyle).toBe("red");
});
