class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = (this._state * 1.5);
    }

    set state (number) {
        if(number < 0) {
            this._state = 0
        }else if(number > 100) {
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }

}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = this.books.find(book => {
            if(book.hasOwnProperty(type)) {
                if(book[type] === value) {
                    return book;
                }
            }
        })

        if(result === undefined) {
            return null;
        };

        return result;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if(book != null) {
            this.books.splice(this.books.indexOf(book), 1);
            return book;
        }else return null;
    }

}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if(mark > 6 || mark < 2) {
            return;
        }else if(!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
            this.marks[subject].push(mark);
        }else {
            this.marks[subject].push(mark);
        };

    }

    getAverageBySubject(subject) {
        if(!this.marks.hasOwnProperty(subject)) {
            return 0;
        }else {
            let sum = this.marks[subject].reduce((acc, item)=> {
                return acc + item;}, 0);
                return parseFloat((sum / this.marks[subject].length).toFixed(2));
        }
    }

    getAverage() {
        let allSubject = Object.keys(this.marks);
        if(allSubject.length === 0) {
            return 0;
        }else {
            let sum = allSubject.reduce((acc, item)=> {
                return this.getAverageBySubject(item) + acc
            }, 0);
    
            return parseFloat((sum / allSubject.length).toFixed(2));
        }
    }



}
