import { fromEvent } from 'rxjs';
import { bufferCount, filter, map, scan, takeWhile } from 'rxjs/operators';

const NUM_OF_LATEST_WORDS = 8;

const toMinute = (ms: number) => ms / 60_000; // milliseconds to minute

function computeWordsPerMinute(timestamps: number[]) {
    const min = Math.min(...timestamps);
    const max = Math.max(...timestamps);
    const diff = max - min;
    return NUM_OF_LATEST_WORDS / toMinute(diff);
}

const $ = document.querySelector.bind(document);

const typeAreaEl = $<HTMLTextAreaElement>('#type-area')!;
const speedEl = $<HTMLSpanElement>('#speed')!;
const countdownEl = $<HTMLSpanElement>('#countdown')!;

const timestamp$ = fromEvent<InputEvent>(typeAreaEl, 'input').pipe(
    /**
     * listen only for events that occur by typing on the keys (ignores cut, paste, backspace, e.t.c)
     */
    filter((e) => e.inputType === 'insertText'),
    /**
     * listen only for events that occur as a result of typing the spacebar
     * to determine when a word is completed.
     */
    filter((e) => e.data === ' '), // listen only for spaces
    /**
     * extract, from each event object, the timestamp when the word was completed
     */
    map((e) => e.timeStamp)
);

const wpm$ = timestamp$.pipe(
    /**
     * accumulate the timestamps of the most recent words into an array
     */
    bufferCount(NUM_OF_LATEST_WORDS, 1),
    /**
     * compute the words per minute based on the timestamps of the latest word entries
     */
    map(computeWordsPerMinute)
);

countdownEl.innerText = `${NUM_OF_LATEST_WORDS}`;
const countdown$ = timestamp$.pipe(
    scan((acc, _) => acc - 1, NUM_OF_LATEST_WORDS),
    takeWhile((x) => x > 0)
);

wpm$.subscribe((wpm) => {
    speedEl.innerText = `${Math.round(wpm)}`;
});
countdown$.subscribe({
    next(wordsLeft) {
        countdownEl.innerText = `${wordsLeft}`;
    },
    complete() {
        countdownEl.parentElement?.setAttribute('hidden', 'true');
    },
});
