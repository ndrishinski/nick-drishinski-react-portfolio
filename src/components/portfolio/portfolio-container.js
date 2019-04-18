import React from 'react'

import PortfolioItem from './portfolio-item';
export default class PortfolioContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            portfolioTitle: 'Welcome to my portfolio page',
            data: [{
                title: 'Jimmy',
                category: 'Father',
                slug: 'father'
            },
            {
                title: 'Hedda',
                category: 'Mother',
                slug: 'mother'
            },
            {
                title: 'Emilie',
                category: 'Wife',
                slug: 'wife'
            }
        ]
        }
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category == filter
            })
        })
    }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem name={item.title} category={item.category} slug={item.slug} />
        })
    }
    
    render() {
        if (this.state.isLoading) {
            return <div>loading...</div>
        }

        return (
            <div>
                <h1>{this.state.portfolioTitle}</h1>

                <button onClick={() => this.handleFilter('Father')}>Father</button>
                <button onClick={() => this.handleFilter('Mother')}>Mother</button>
                <button onClick={() => this.handleFilter('Wife')}>Wife</button>

                {this.portfolioItems()}
            </div>
        )
    }
}